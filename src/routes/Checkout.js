import CartList from "../components/CartList";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  return (
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
        <ArrowBackIcon onClick={() => navigate(-1)} />
      </Box>
      <CartList />;
    </>
  );
};

export default Checkout;
