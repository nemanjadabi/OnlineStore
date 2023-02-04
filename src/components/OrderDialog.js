import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import { Link } from "react-router-dom";

const OrderDialog = (props) => {
  const dispatch = useDispatch();

  const orderHandler = () => {
    dispatch(cartActions.emptyCart());
    alert("Your order has been sent ;)");
  };

  const closeHandler = () => {
    props.close();
  };
  return (
    <div>
      <Dialog open={props.open} onClose={closeHandler}>
        <DialogTitle>Enter your info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Make sure to enter correct informations!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="city"
            label="City, State"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeHandler}>Close</Button>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button onClick={orderHandler}>Order</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OrderDialog;
