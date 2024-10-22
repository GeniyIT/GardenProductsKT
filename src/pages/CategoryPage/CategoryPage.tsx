import { Navigate, replace, useNavigate, useParams } from "react-router-dom";
import { FilterProducts } from "../../components/FilterProducts/FilterProducts";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";
import styles from "./CategoryPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import {
  setCurrentCategoryProducts,
  setFilteredProducts,
} from "../../store/productsSlice";
import { routes } from "../../config/routes";

export function CategoryPage() {
  const navigate = useNavigate();
  const { idCategory } = useParams<{ idCategory: string }>();
  const { categories } = useSelector((state: RootState) => state.categories);

  const { currentCategoryProducts, filterOpts, filteredProducts } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setCurrentCategoryProducts(Number(idCategory)));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setFilteredProducts(currentCategoryProducts));
  }, [currentCategoryProducts, dispatch, filterOpts]);

  if (!categories[Number(idCategory) - 1]) {
    return <div>Not found</div>;
  }

  console.log("[FILTER_OPTIONS]", filterOpts);
  console.log("[FILTER_PRODUCTS]", filteredProducts);
  return (
    <div className={styles.category_page}>
      <h1 className={styles.category_page_title}>
        {categories[Number(idCategory) - 1].title}
      </h1>
      <FilterProducts isSales={false} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
        {filteredProducts.map((product, idx) => (
          <ProductsCard {...product} key={"product-id-" + idx} />
        ))}
      </div>
    </div>
  );
}
