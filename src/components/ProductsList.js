import ProductsListItem from "./ProductsListItem";
import Grid from "@mui/material/Grid";

const ProductsList = (props) => {
  const productsList = props.products.map((item) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
      <ProductsListItem
        title={item.title}
        price={item.price}
        image={item.image}
        key={item.id}
        id={item.id}
      />
    </Grid>
  ));
  return (
    <Grid container spacing={2} p={2} alignItems={"stretch"}>
      {productsList}
    </Grid>
  );
};

export default ProductsList;
