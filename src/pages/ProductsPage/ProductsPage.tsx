import { useParams } from "react-router-dom";
import styles from "./ProductsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { setCurrentProduct } from "../../store/productsSlice";
import { apiUrl } from "../../config/consts";
import { addItem } from "../../store/cartSlice";

export function ProductsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { idProduct } = useParams<{ idProduct: string }>();
  const { currentProduct } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(setCurrentProduct(Number(idProduct)));
  }, [dispatch]);

  if (!currentProduct) {
    return <div>Not found...</div>;
  }
  const { id, title, price, image, description, discont_price } =
    currentProduct;
  const percentage = discont_price
    ? Math.floor(((price - discont_price) / price) * 100)
    : null;

  return (
    <div className={styles.products_page}>
      <div className={styles.products_page_wrapper}>
        <div className={styles.products_page_img_container}>
          <img className={styles.products_page_img} src={apiUrl + image} alt="" />
        </div>
        <div className={styles.products_page_info_container}>
          <h1 className={styles.products_page_title}>{title}</h1>
          <div className={styles.products_page_price_wrapper}>
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
            {discont_price && (
              <div className={styles.products_page_discount_percentage}>
                -{percentage}%
              </div>
            )}
          </div>

          <button
            className={styles.products_page_button}
            onClick={() => {
              console.log(
                dispatch(addItem({ id, image, title, price, discont_price }))
              );
            }}
          >
            Add to cart
          </button>
          <div className={styles.products_page_description_container}>
            <h1 className={styles.products_page_description_title}>
              Description
            </h1>
            <p className={styles.products_page_description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
