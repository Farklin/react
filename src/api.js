import { API_URL } from "./config";
import memoize from "lodash.memoize";
// получить все категории
const getAllCategories = async () => {
  const response = await fetch(API_URL + "categories");
  return await response.json();
};
// получить товары категории
const getCategoryProduct = async (id) => {
  const response = await fetch(API_URL + "category/" + id);
  return await response.json();
};
// получить один товар по slug
const getOneProduct = async (id) => {
  const response = await fetch(API_URL + "product/" + id);
  return await response.json();
};

const getAllProducts = async () => {
  const response = await fetch(API_URL + "products/");
  return await response.json();
};

const getPaginationCategory = async (id) => {
  const responce = await fetch(API_URL + "category/" + id);
  return await responce.json();
};

export {
  getAllCategories,
  getCategoryProduct,
  getOneProduct,
  getAllProducts,
  getPaginationCategory,
};
