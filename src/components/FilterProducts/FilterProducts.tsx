import { FC, useEffect, useState } from "react";
import styles from "./FilterProducts.module.css";
import { IFilterOpts, setFilterOptions } from "../../store/productsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

interface IFilterProductsProps {
  isSales: boolean;
}
export const FilterProducts: FC<IFilterProductsProps> = ({ isSales }) => {
  const [filterOpts, setFilterOpts] = useState<IFilterOpts>({
    sortMethod: "default",
    price: { from: null, to: null },
    getDiscont: isSales,
  });

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(setFilterOptions(filterOpts));
  }, [dispatch, filterOpts]);

  return (
    <div className={styles.filter_products}>
      <div className={styles.filter_products_item}>
        <h1 className={styles.filter_products_title}>Price</h1>
        <input
          className={styles.filter_products_price_input}
          placeholder="from"
          type="number"
          id="from"
          onChange={(e) => {
            setFilterOpts({
              ...filterOpts,
              price: { from: +e.target.value, to: filterOpts.price.to },
            });
          }}
        />
        <input
          className={styles.filter_products_price_input}
          placeholder="to"
          type="number"
          id="to"
          onChange={(e) =>
            setFilterOpts({
              ...filterOpts,
              price: { to: +e.target.value, from: filterOpts.price.from },
            })
          }
        />
      </div>
      {!isSales && (
        <div className={styles.filter_products_item}>
          <h1 className={styles.filter_products_title}>Discount items</h1>
          <label className={styles.filter_products_discount_label}>
            <input
              className={styles.filter_products_discount_input}
              type="checkbox"
              id="discount"
              onChange={(e) =>
                setFilterOpts({
                  ...filterOpts,
                  getDiscont: e.target.checked,
                })
              }
            />
            <span className={styles.filtre_products_discount_checkmark}></span>
          </label>
        </div>
      )}
      <div className={styles.filter_products_item}>
        <h1 className={styles.filter_products_title}>Sorted</h1>
        <select
          className={styles.filter_products_sorted_select}
          onChange={(e) =>
            setFilterOpts({
              ...filterOpts,
              sortMethod: e.target.value as "default" | "lower" | "upper",
            })
          }
        >
          <option value="default" id="default">
            by default
          </option>
          <option value="lower" id="price">
            Price lower
          </option>
          <option value="upper" id="price">
            Price higher
          </option>
        </select>
      </div>
    </div>
  );
};
