import { useSelector } from "react-redux";
import styles from "./Categories.module.css";
import { RootState } from "../../../../store";
import { CategoryCard } from "../../../../components/CategoryCard/CategoryCard";
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../../config/routes';

export function Categories() {
  const { loading, categories } = useSelector(
    (state: RootState) => state.categories
  );
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(categories);

  const navigate = useNavigate();

  return (
    <div className={styles.categories}>
      <div className={styles.catrgories_title_container}>
        <h1 className={styles.categories_title}>Categories</h1>
        <div className={styles.categories_button_container}>
          <div className={styles.categories_button_line}></div>
          <button className={styles.categories_button} onClick={() => navigate(routes.allCategories)}>All categories</button>
        </div>
      </div>
      <div className={styles.categories_card}>
        {categories.map((item, index) =>
          index <= 3 ? <CategoryCard {...item} key={"card-" + index} /> : ""
        )}
      </div>
    </div>
  );
}
