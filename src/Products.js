
import {useState} from "react";


function Products(){

    const [products, setProducts] = useState([]); 

    const getProducts = () => {
        fetch('http://127.0.0.1:8000/api/products')
        .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data[0].image.image_path); 
            setProducts(data);  
         
          }); 
          ; 
    
    }

    const ImageProduct = (image) => {
        if(image !== null) {
            return (image) ; 
        }else{ return ''}
    }

    const ProductContainer = ({products}) => (
        <div> 
            {
            products.map(
                (element) => (
                <div>
                  
                    <ImageProduct image = {element.image.image_path} /> 
                    {element.title} 
                </div>
                ))
            }
         
        </div> 
    ); 
    return(
        <div> 
            <button onClick={getProducts}> Получить товары </button> 
            <ProductContainer products={products} /> 
        </div> 
    ); 



}

export default Products; 