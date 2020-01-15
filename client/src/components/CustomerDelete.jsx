import React, { useState, useContext } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { StoreContext } from "../store/store";

const CustomerDelete = ({ id }) => {
  const { state, actions } = useContext(StoreContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteCustomer = id => {
    actions.deleteCustomer(id);
    // dispatch({ type: "CHANGE_CUSTOMER_STATUS", payload: id });
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        삭제
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle onClose={handleClose}>자료삭제 경고</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>선택한 자료를 삭제 하겠습니까?</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={e => {
              deleteCustomer(id);
            }}
          >
            삭제{" "}
          </Button>
          <Button variant="outlined" color="primary" onClick={handleClose}>
            닫기{" "}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomerDelete;
