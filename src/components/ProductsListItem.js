import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProducrsListItem = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (event) => {
    event.preventDefault();
    dispatch(
      cartActions.addItem({
        product: {
          id: props.id,
          title: props.title,
          image: props.image,
          price: props.price,
        },
        amount: 1,
      })
    );
  };
  return (
    <Link
      to={`/product/${props.id}`}
      style={{ textDecoration: "none", display: "block", height: "100%" }}
    >
      <Card
        // sx={{ maxWidth: 345 }}
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <CardMedia
          style={{
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={props.image}
            alt={props.title}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </CardMedia>
        <CardContent
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography gutterBottom variant="h8" component="div">
              {props.title}
            </Typography>
            <Typography
              fontWeight={700}
              gutterBottom
              variant="body1"
              component="div"
            >
              {props.price.toFixed(2)}
              {"$"}
            </Typography>
          </div>
          <Button
            size="small"
            onClick={addToCartHandler}
            variant="contained"
            endIcon={<AddShoppingCartIcon />}
          >
            Add to cart
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProducrsListItem;
