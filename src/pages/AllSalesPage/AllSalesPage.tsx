import { useDispatch, useSelector } from "react-redux";
import { FilterProducts } from "../../components/FilterProducts/FilterProducts";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";
import styles from "./AllSalesPage.module.css";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import {
  getSalesProducts,
  setFilteredProducts,
} from "../../store/productsSlice";

export function AllSalesPage() {
  const { salesProducts, filterOpts, filteredProducts } = useSelector(
    (state: RootState) => state.products
  );
  console.log(12344);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getSalesProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log(salesProducts);
    dispatch(setFilteredProducts(salesProducts));
  }, [dispatch, salesProducts, filterOpts]);
  if (salesProducts.length === 0) {
    return <></>;
  }
  console.log("[FILTERED PRODUCTS]: ", filteredProducts);
  console.log(filterOpts);
  return (
    <div className={styles.all_sales_page}>
      <h1 className={styles.all_sales_page_title}>Discounted items</h1>
      <FilterProducts isSales={true} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
        {filteredProducts.map((product, idx) => (
          <ProductsCard {...product} key={"product-id-" + idx} />
        ))}
      </div>
    </div>
  );
}
