const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

connection.connect();

const multer = require('multer');
const upload = multer({ dest: './upload' });


app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello Express! My name is Andrey' });
});


app.get('/api/todos', (req, res) => {

    var delayInMilliseconds = 1000; //1 second

    setTimeout(() => {
        connection.query(
            "SELECT * FROM todos ",
            (err, rows, fileds) => {
                res.send(rows);
            }
        )
    }, delayInMilliseconds);

});

app.get('/api/customers', (req, res) => {

    var delayInMilliseconds = 100; //1 second

    setTimeout(() => {
        connection.query(
            "SELECT * FROM CUSTOMER ORDER BY id desc",
            (err, rows, fileds) => {
                res.send(rows);
            }
        )
    }, delayInMilliseconds);

});

app.use('/image', express.static('./upload'));

app.post('/api/customers', upload.single('image'), (req, res) => {
    let sql = 'INSERT INTO CUSTOMER VALUES(null, ?, ?, ?, ?, ?, now(), 0)';
    let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    let params = [image, name, birthday, gender, job];

    connection.query(sql, params, (err, rows, fields) => {
        connection.query(
            "SELECT * FROM CUSTOMER ORDER BY id desc ",
            (err, rows, fileds) => {
                res.send(rows);
            }
        )
    })

});

app.delete('/api/customers/:id', (req, res) => {
    let sql = 'UPDATE CUSTOMER SET isDeleted = 1 where id = ?';
    let params = [req.params.id];
    console.log(sql);
    console.log(req.params.id);

    connection.query(sql, params, (err, rows, fields) => {
        res.send(rows);

    })


})
app.listen(port, () => console.log(`Listening on port ${port}`));