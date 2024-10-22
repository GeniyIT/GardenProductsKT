import axios from "axios";
import { apiUrl } from "../config/consts";
import { backendRoutes } from "../config/routes";
import { ICategory } from "../store/categoriesSlice";
import { IProduct } from "../store/productsSlice";

export async function getAllCategories() {
  const response = await axios<ICategory[]>(
    `${apiUrl}/${backendRoutes.categories}`
  );
  return response;
}

export async function getAllProducts() {
  const response = await axios<IProduct[]>(
    `${apiUrl}/${backendRoutes.products}`
  );
  console.log(123, response);
  return response;
}
