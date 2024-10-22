import { useNavigate } from "react-router-dom";
import { routes } from "../../config/routes";
import styles from "./NotFoundPage.module.css";
import { FC } from "react";

export const NotFoundPage: FC = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.not_found_page}>
      <div className={styles.not_found_page_container}>
        <div className={styles.not_found_page_img_container}>
          <img className={styles.not_found_page_number} src="/src/assets/img/404.svg" alt="404"/>
          <img className={styles.not_found_page_img} src="/img/404.png" alt="404" />
          <img className={styles.not_found_page_number} src="/src/assets/img/404.svg" alt="404"/>
        </div>
        <div className={styles.not_found_page_info_container}>
          <h1 className={styles.not_found_page_title}>Page not found</h1>
          <p className={styles.not_found_page_text}>
            We’re sorry, the page you requested could not be found.
          </p>
          <p className={styles.not_found_page_text}>
            Please go back to the homepage.
          </p>
        </div>
        <button onClick={() => navigate(routes.home)} className={styles.not_found_page_button}>Go Home</button>
      </div>
    </div>
  );
};
