import { API_URL } from "./config";

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

// получить все товары


export { getAllCategories, getCategoryProduct, getOneProduct };
