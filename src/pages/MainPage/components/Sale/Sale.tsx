import { useDispatch, useSelector } from "react-redux";
import styles from "./Sale.module.css";
import { AppDispatch, RootState } from "../../../../store";
import { useEffect } from "react";
import {
  getSalesProducts,
  setCurrentCategoryProducts,
  setCurrentProduct,
} from "../../../../store/productsSlice";
import { SaleCard } from "./SaleCard/SaleCard";
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../../config/routes';

export function Sale() {
  const dispatch = useDispatch<AppDispatch>();
  const { salesProducts, currentCategoryProducts, currentProduct } =
    useSelector((state: RootState) => state.products);
  useEffect(() => {
    dispatch(getSalesProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentCategoryProducts(1));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentProduct(2));
  }, [dispatch]);

  if (!salesProducts) {
    return <span>Not found</span>;
  }
  console.log("[CURRENT CATEGORY PRODUCTS]: ", currentCategoryProducts);
  console.log("[CURRENT PRODUCT]: ", currentProduct);
  console.log(salesProducts);

  const navigate = useNavigate();
  return (
    <div className={styles.sale}>
      <div className={styles.sale_title_container}>
        <h1 className={styles.sale_title}>Sale</h1>
        <div className={styles.sale_button_container}>
          <div className={styles.sale_button_line}></div>
          <button className={styles.sale_button} onClick={() => navigate(routes.allSales)}>All sale</button>
        </div>
      </div>
      <div className={styles.sale_card}>
        {salesProducts.map((saleProduct, idx) =>
          idx <= 3 ? <SaleCard {...saleProduct} key={`sale-card-${idx}`} /> : ""
        )}
      </div>
    </div>
  );
}
