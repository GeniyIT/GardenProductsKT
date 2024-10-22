import { useDispatch, useSelector } from "react-redux";
import styles from "./CategoriesPage.module.css";
import { AppDispatch, RootState } from "../../store";
import { fetchCategories } from "../../store/categoriesSlice";
import { useEffect } from "react";
import { CategoryCard } from "../../components/CategoryCard/CategoryCard";
import { apiUrl } from "../../config/consts";

export function CategoriesPage() {
  const { categories } = useSelector((state: RootState) => state.categories);
  console.log(categories);

  return (
    <div className={styles.categories_page}>
      <h1 className={styles.categories_page_title}>Categories</h1>
      <div className={styles.categories_page_card}>
        {categories.length === 0
          ? ""
          : categories.map((item, index) => (
              <CategoryCard {...item} key={"card-" + index} />
            ))}
      </div>
    </div>
  );
}
