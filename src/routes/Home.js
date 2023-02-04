import { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import TabList from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductsList from "../components/ProductsList";
import CartIcon from "../components/CartIcon";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import { useSelector, useDispatch } from "react-redux";
import { productsActions } from "./../store/products";

function Home(props) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
  const loadingCategories = useSelector(
    (state) => state.products.categoriesLoading
  );

  const products = useSelector((state) => state.products.products);
  const loadingProducts = useSelector(
    (state) => state.products.productsLoading
  );

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = async (event, newValue) => {
    setActiveTab(newValue);
    if (newValue === 0) {
      dispatch(productsActions.fetchAllProducts());
    } else {
      dispatch(productsActions.fetchProductsInCategory(newValue));
    }
  };
  useEffect(() => {
    dispatch(productsActions.fetchCategories());
    dispatch(productsActions.fetchAllProducts());
  }, [dispatch]);

  const tabs = categories.map((item) => <Tab label={item} key={item} />);

  return (
    <Fragment>
      {loadingCategories ? (
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
              paddingRight: "20px",
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TabList
              variant="scrollable"
              value={activeTab}
              onChange={handleTabChange}
              aria-label="basic tabs example"
              allowScrollButtonsMobile={true}
              scrollButtons
            >
              {tabs}
            </TabList>
            <CartIcon />
          </Box>
          {loadingProducts && (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          )}
          <ProductsList products={products} />
        </>
      )}
    </Fragment>
  );
}

export default Home;
