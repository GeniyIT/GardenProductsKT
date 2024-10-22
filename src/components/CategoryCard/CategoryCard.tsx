import { FC } from "react";
import styles from "./CategoryCard.module.css";
import { ICategory } from "../../store/categoriesSlice";
import { useNavigate } from "react-router-dom";
import { generatePath } from "../../utils/genPath";
import { routes } from "../../config/routes";
import { apiUrl } from "../../config/consts";

export const CategoryCard: FC<ICategory> = ({ id, title, image }) => {
  const navigate = useNavigate();
  const navigateFunc = () => {
    navigate(generatePath(routes.category, { idCategory: id }));
  };
  return (
    <div className={styles.category_card} onClick={navigateFunc}>
      <div className={styles.category_card_img_container}>
        <img className={styles.category_card_img} src={apiUrl + image} alt="" />
      </div>
      <p className={styles.category_card_title}>{title}</p>
    </div>
  );
};
