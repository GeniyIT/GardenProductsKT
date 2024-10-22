import { useForm } from "react-hook-form";
import styles from "./CartPage.module.css";
import { FC, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { CartCard } from "./CartCard/CartCard";
import { sendOrder, TItemCart } from "../../store/cartSlice";
import { mapObject } from "../../utils/mapObject";

export const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
    dispatch(sendOrder());
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const itemKeys = Object.keys(items);
  console.log(itemKeys, items, totalPrice);
  return (
    <div className={styles.cart_page}>
      <div className={styles.cart_title_container}>
        <h1 className={styles.cart_title}>Shopping cart</h1>
        <div className={styles.cart_button_container}>
          <div className={styles.cart_button_line}></div>
          <button className={styles.cart_button}>Back to the store</button>
        </div>
      </div>
      <div className={styles.cart_content_container}>
        <div className={styles.cart_content}>
          <div className={styles.cart_list}>
            {itemKeys.map((key) => (
              <CartCard key={key} {...items[key]} />
            ))}
          </div>
          <div className={styles.cart_order_form_container}>
            <div className={styles.cart_order_details}>
              <h1 className={styles.cart_order_title}>Order details</h1>
              <div className={styles.cart_order_total}>
                <h1 className={styles.cart_order_total_title}>
                  {itemKeys.length} Items
                </h1>
                <div className={styles.cart_order_total_price}>
                  <h1 className={styles.cart_order_total_title}>Total</h1>
                  <h1 className={styles.cart_order_total_price_value}>
                    ${totalPrice}
                  </h1>
                </div>
              </div>
            </div>
            <div className={styles.cart_order_form}>
              <form
                className={styles.cart_order_form_form}
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  className={styles.cart_order_form_input}
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                />
                <input
                  className={styles.cart_order_form_input}
                  type="text"
                  placeholder="Phone number"
                  {...register("phone")}
                />
                <input
                  className={styles.cart_order_form_input}
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                <button
                  className={styles.cart_order_form_button}
                  onClick={openModal}
                >
                  Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <div className={styles.modal_container}>
          <h2 className={styles.modal_title}>Congratulations! </h2>
          <div className={styles.modal_text_container}>
            <p className={styles.modal_text}>
              Your order has been successfully placed on the website.
            </p>
            <p className={styles.modal_text}>
              A manager will contact you shortly to confirm your order.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};
