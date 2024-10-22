import { useDispatch, useSelector } from "react-redux";
import { FilterProducts } from "../../components/FilterProducts/FilterProducts";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";
import styles from "./AllProductsPage.module.css";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { setFilteredProducts } from "../../store/productsSlice";

export function AllProductsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, filterOpts, filteredProducts } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(setFilteredProducts(products));
  }, [dispatch, filterOpts, products]);

  return (
    <div className={styles.all_products_page}>
      <h1 className={styles.all_products_page_title}>All products</h1>
      <FilterProducts isSales={false} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
        {filteredProducts.map((product, idx) => (
          <ProductsCard {...product} key={"product-id-" + idx} />
        ))}
      </div>
    </div>
  );
}
