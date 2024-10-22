export enum routes {
  home = "/",
  allCategories = "/categories",
  allSales = "/sales/",
  category = "/category/:idCategory",
  product = "/product/:idProduct",
  cart = "/cart",
  allProducts = "/products/",
  notFound = "/404",
}

export enum backendRoutes {
  categories = "categories/all",
  categoryById = "categories/:id",
  products = "products/all",
  productById = "products/:id",
  getCouponRequest = "/sale/send",
  sendOrder = "order/send",
}
