import { useSelector } from "react-redux";
import CartListItem from "./CartListItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useState } from "react";
import OrderDialog from "./OrderDialog";

const CartList = () => {
  const [open, setOpen] = useState(false);

  const itemsInCart = useSelector((state) => state.cart.items);

  const allPrices = itemsInCart.map((item) => item.price * item.amount);
  const totalPrice = allPrices
    .reduce((curr, next) => curr + next, 0)
    .toFixed(2);

  const openDialogHandler = () => {
    setOpen(true);
  };

  const closeDialogHandler = () => {
    setOpen(false);
  };

  const listOfItems = itemsInCart.map((item) => (
    <CartListItem
      id={item.id}
      key={item.title}
      title={item.title}
      image={item.image}
      price={item.price * item.amount}
      amount={item.amount}
    ></CartListItem>
  ));
  return (
    <>
      {open && <OrderDialog open={open} close={closeDialogHandler} />}
      <Grid container spacing={2} p={2} alignItems={"stretch"} minHeight={300}>
        {listOfItems.length ? (
          <Grid item xs={12} md={8}>
            {listOfItems}
          </Grid>
        ) : (
          <Grid item xs={12} md={8}>
            Your cart is empty!
          </Grid>
        )}

        <Grid
          item
          xs={12}
          md={4}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <div style={{ fontSize: "20px" }}>TOTAL:</div>
          <div style={{ fontSize: "50px", fontWeight: "700" }}>
            {totalPrice}$
          </div>

          <Button
            disabled={!listOfItems.length}
            variant="contained"
            onClick={openDialogHandler}
          >
            Order
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CartList;
