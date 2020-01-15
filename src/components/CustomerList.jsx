import React, { useContext, useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { StoreContext } from "../store/store";
import Customer from "./Customer";
// import useFetch from "../UseFetch.jsx";

const useStyle = makeStyles(theme => ({
  paper: {
    marginLeft: 18,
    marginRight: 18
  }
}));

const CustomerList = () => {
  const classes = useStyle();
  const { state, actions } = useContext(StoreContext);

  const [completed, setCompleted] = useState(0);

  const progress = () => {
    setCompleted(preCompleted => (preCompleted > 100 ? 0 : preCompleted + 1));
  };

  const loading = state.loading;

  useEffect(() => {
    actions.loadCustomers("what you want to search ? ");
    const timer = setInterval(progress, 30);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const filteredComponents = data => {
    data = data.filter(c => {
      return c.name.indexOf(state.searchKey) > -1;
    });
    return data.map(customer => {
      if (customer.isDeleted === 0)
        return <Customer key={customer.id} customer={customer} />;
    });
  };

  const cellList = [
    "번호",
    "프로필이미지",
    "이름",
    "생년월일",
    "성별",
    "직업",
    "설정"
  ];

  return (
    <div>
      <Paper className={classes.paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {cellList.map(c => {
                return (
                  <TableCell key={c.id} className={classes.tableHead}>
                    {c}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading ? (
              filteredComponents(state.customers)
            ) : (
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress
                    className={classes.progress}
                    variant="determinate"
                    value={completed}
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default CustomerList;
