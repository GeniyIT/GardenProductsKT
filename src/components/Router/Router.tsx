import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "../App/App";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import { routes } from "../../config/routes";
import { CategoriesPage } from "../../pages/Categories/CategoriesPage";
import { AllProductsPage } from "../../pages/AllProductsPage/AllProductsPage";
import { AllSalesPage } from "../../pages/AllSalesPage/AllSalesPage";
import { CategoryPage } from "../../pages/CategoryPage/CategoryPage";
import { CartPage } from "../../pages/CartPage/CartPage";
import { ProductsPage } from "../../pages/ProductsPage/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: routes.home, element: <MainPage /> },
      { path: routes.allCategories, element: <CategoriesPage /> },
      { path: routes.allProducts, element: <AllProductsPage /> },
      { path: routes.category, element: <CategoryPage /> },
      { path: routes.allSales, element: <AllSalesPage /> },
      { path: routes.cart, element: <CartPage /> },
      { path: routes.product, element: <ProductsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
