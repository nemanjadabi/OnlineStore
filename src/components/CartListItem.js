import * as React from "react";
import Box from "@mui/material/Box";

import "./CartListItem.css";

import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

const CartListItem = (props) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(
      cartActions.removeItem({
        product: {
          id: props.id,
        },
        amount: props.amount,
      })
    );
  };

  const changeAmountHandler = (value) => {
    dispatch(
      cartActions.addItem({
        product: {
          id: props.id,
        },
        amount: value,
      })
    );
  };

  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <div style={{ margin: "10px" }}>
          <div className="container">
            <div className="cont">
              <img className="picture" alt={props.title} src={props.image} />

              <h3 className="text">{props.title}</h3>
            </div>
            <h4 className="price">{props.price.toFixed(2)}$</h4>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <IconButton
              disabled={props.amount < 2}
              onClick={() => changeAmountHandler(-1)}
            >
              <RemoveIcon />
            </IconButton>
            <span>{props.amount}</span>
            <IconButton onClick={() => changeAmountHandler(1)}>
              <AddIcon />
            </IconButton>

            <Button
              className="button"
              onClick={removeFromCartHandler}
              variant="contained"
            >
              Remove
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
};

export default CartListItem;
