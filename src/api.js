import {API_URL} from './config';

// получить все категории
const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories');
    return await response.json();
};
// получить товары категории
const getCategoryProduct = async (id) => {
    const response = await fetch(API_URL + 'category/87473');
    return await response.json();
};
// получить один товар по slug 
const getOneProduct = async (slug) => {
    const response = await fetch(API_URL + 'product/' + slug);
    return await response.json();
};

// получить все товары
const getOneProducts = async (slug) => {
    const response = await fetch(API_URL + 'product/' + slug);
    return await response.json();
};


export {getAllCategories, getCategoryProduct, getOneProduct, getOneProducts};