import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Box from "@mui/material/Box";
import CartIcon from "../components/CartIcon";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { productsActions } from "./../store/products";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart";

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const loadingSingleProduct = useSelector(
    (state) => state.products.productsLoading
  );

  const { productId } = useParams();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(productsActions.fetchSingleProduct(productId));
  }, [dispatch, productId]);

  const changeQuantityHandler = (value) => {
    setQuantity(quantity + value);
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        product,
        amount: quantity,
      })
    );
  };

  return (
    <>
      {loadingSingleProduct ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      ) : (
        <>
          <Box
            sx={{
              padding: "0 20px",
              borderBottom: 1,
              borderColor: "divider",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link to={"/"}>
              <ArrowBackIcon />
            </Link>
            <CartIcon />
          </Box>
          <Grid
            container
            spacing={2}
            p={2}
            alignItems={"stretch"}
            minHeight={300}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={product.image} width="300" alt="slika"></img>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <Typography variant="h5" fontWeight={600}>
                    {product.title}
                  </Typography>
                  <Typography variant="body1" marginTop={"10px"}>
                    {product.description}
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "40px",
                  }}
                >
                  <Typography fontWeight={700} variant="h6">
                    {product.price}$
                  </Typography>
                  <div>
                    <IconButton
                      disabled={quantity < 2}
                      onClick={() => changeQuantityHandler(-1)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <span>{quantity}</span>
                    <IconButton onClick={() => changeQuantityHandler(1)}>
                      <AddIcon />
                    </IconButton>
                    <Button
                      sx={{
                        marginLeft: "10px",
                      }}
                      onClick={addToCartHandler}
                      variant="contained"
                      endIcon={<AddShoppingCartIcon />}
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Product;
