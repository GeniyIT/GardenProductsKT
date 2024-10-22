import { FC } from "react";
import styles from "./CartCard.module.css";
import {
  addItem,
  decCountItem,
  deleteItem,
  incCountItem,
  TItemCart,
} from "../../../store/cartSlice";
import { apiUrl } from "../../../config/consts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";

export const CartCard: FC<TItemCart> = ({
  id,
  discont_price,
  price,
  title,
  image,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <div className={styles.cart_card}>
      <img className={styles.cart_card_img} src={apiUrl + image} alt="" />
      <div className={styles.cart_card_info}>
        <div className={styles.cart_card_info_title}>
          <h1>{title}</h1>
          <img
            className={styles.cart_card_info_delete}
            src="/src/assets/img/delete.svg"
            alt=""
            onClick={() => dispatch(deleteItem(id))}
          />
        </div>
        <div className={styles.cart_card_info_price_container}>
          <div className={styles.cart_card_info_price}>
            <button
              onClick={() => {
                dispatch(decCountItem(id));
              }}
            >
              -
            </button>
            <p>{items[id].count}</p>
            <button
              onClick={() => {
                dispatch(incCountItem(id));
              }}
            >
              +
            </button>
          </div>
          <div className={styles.products_page_price_container}>
            {discont_price ? (
              <>
                <p className={styles.products_page_discount_price}>
                  ${discont_price}
                </p>
                <del className={styles.products_page_price}>${price}</del>
              </>
            ) : (
              <p className={styles.products_page_discount_price}>${price}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
