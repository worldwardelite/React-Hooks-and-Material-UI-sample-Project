import React, { useContext, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { StoreContext } from "../store/store";

const useStyle = makeStyles({
  hidden: {
    display: "none"
  },
  addbutton: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "5px"
  }
});
const CustomerAdd = () => {
  const initialForm = {
    file: null,
    userName: "",
    birthday: "",
    gender: "",
    job: "",
    fileName: ""
  };
  const { state, actions } = useContext(StoreContext);
  const [open, setOpen] = useState(false);
  const [formdata, setFormdata] = useState(initialForm);
  const classes = useStyle();

  const handleOpen = e => {
    setOpen(true);
  };
  const handleClose = e => {
    setOpen(false);
    setFormdata(initialForm);
  };

  const handleFileChange = e => {
    setFormdata({
      ...formdata,
      file: e.target.files[0],
      fileName: e.target.value
    });
    console.log(e.target.value);
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    addCustomer();
    setOpen(false);
    setFormdata(initialForm);
  };

  const addCustomer = () => {
    const url = "/api/customers";
    const formData = new FormData();
    formData.append("image", formdata.file);
    formData.append("name", formdata.userName);
    formData.append("birthday", formdata.birthday);
    formData.append("gender", formdata.gender);
    formData.append("job", formdata.job);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    actions.addCustomer({
      formData,
      config
    });
    // return post(url, formData, config);
  };
  const handleValueChange = e => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className={classes.addbutton}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          고객 추가하기
        </Button>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>고객추가정보</DialogTitle>
        <DialogContent>
          <input
            className={classes.hidden}
            accept="image/*"
            id="raised-button-file"
            type="file"
            file={formdata.file}
            value={formdata.fileName}
            onChange={handleFileChange}
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              name="file"
            >
              {formdata.fileName === ""
                ? "프로필 이메지 선택 "
                : formdata.fileName}
            </Button>
          </label>
          <br />
          <TextField
            label="이름"
            type="text"
            name="userName"
            value={formdata.userName}
            onChange={handleValueChange}
          />{" "}
          <br />
          <TextField
            label="생년월일"
            type="text"
            name="birthday"
            value={formdata.birthday}
            onChange={handleValueChange}
          />{" "}
          <br />
          <TextField
            label="성별"
            type="text"
            name="gender"
            value={formdata.gender}
            onChange={handleValueChange}
          />{" "}
          <br />
          <TextField
            label="직업"
            type="text"
            name="job"
            value={formdata.job}
            onChange={handleValueChange}
          />{" "}
          <br />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
          >
            추가{" "}
          </Button>
          <Button variant="outlined" color="primary" onClick={handleClose}>
            닫기{" "}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomerAdd;
