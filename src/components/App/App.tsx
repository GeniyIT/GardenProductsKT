import { Provider, useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categoriesSlice";
import { AppDispatch, RootState } from "../../store";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { fetchAllProducts } from "../../store/productsSlice";

export function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading: loadingCategories, categories } = useSelector(
    (state: RootState) => state.categories
  );
  const { loading: loadingProducts, products } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch, categories.length]);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch, products.length]);

  if (loadingCategories) {
    return <div>Loading categories...</div>;
  }

  if (loadingProducts) {
    return <div>Loading products...</div>;
  }
  console.log(products);
  console.log(categories);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
