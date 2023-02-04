const productsApi = {
  async fetchAllProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
  },

  async fetchAllCategories() {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    return await response.json();
  },

  async fetchProductsInCategory(category) {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return await response.json();
  },

  async fetchSingleProduct(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await response.json();
  },
};
export default productsApi;
