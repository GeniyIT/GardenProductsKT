import { FC } from "react";
import styles from "./SaleCard.module.css";
import { IProduct } from "../../../../../store/productsSlice";
import { apiUrl } from "../../../../../config/consts";

export const SaleCard: FC<IProduct> = ({
  title,
  image,
  price,
  discont_price,
}) => {
  const percentage = Math.floor(((price - discont_price) / price) * 100);
  return (
    <div className={styles.sale_card}>
      <div className={styles.sale_card_img_container}>
        <img className={styles.sale_card_img} src= {apiUrl + image} alt="" />
      </div>
      <div className={styles.sale_card_info}>
        <h1 className={styles.sale_card_title}>{title}</h1>
        <div className={styles.sale_card_price_container}>
          <p className={styles.sale_card_discount_price}>${discont_price}</p>
          <del className={styles.sale_card_price}>${price}</del>
        </div>
      </div>
      <div className={styles.sale_card_discount_percentage}>-{percentage}%</div>
    </div>
  );
};
