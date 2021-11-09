
import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

class Product extends React.Component {
    constructor(props, title, price, image) {
        super(props);
        this.state = {
            title: title,
            price: price,
            image: image,
            nameButton: "В корзину", 
        }
    }

    render() {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={ this.state.image }
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           { this.state.title }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        {this.state.nameButton}
                    </Button>
                </CardActions>
            </Card>
        );
    }

}






class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        fetch('https://teisbubble.ru/api/products')
        .then(res => res.json())
        .then(
            (result ) => {
                this.setState({
                        products: result, 
                    }); 
                console.log(result); 
            }, 
        )
    }

    render() {
        const  {products} = this.state; 
        return (
            <ul> 
                {products.map((item) => <Product title={item.title} image={item.image.thumbnail.toString()} price={item.price} />  ) } 
            </ul> 
        );
    }
}

export default ProductsList;


// function Products(){

//     const [products, setProducts] = useState([]); 

//     const getProducts = () => {
//         fetch('http://teisbubble/api/products')
//         .then((response) => {
//             return response.json();
//           })
//           .then((data) => {
//             console.log(data[0].image.image_path); 
//             setProducts(data);  

//           }); 
//           ; 

//     }

//     const ImageProduct = (image) => {
//         if(image !== null) {
//             return (image) ; 
//         }else{ return ''}
//     }

//     const ProductContainer = ({products}) => (
//         <div> 
//             {
//             products.map(
//                 (element) => (
//                 <div>

//                     <ImageProduct image = {element.image.image_path} /> 
//                     {element.title} 
//                 </div>
//                 ))
//             }

//         </div> 
//     ); 
//     return(
//         <div> 
//             <button onClick={getProducts}> Получить товары </button> 
//             <ProductContainer products={products} /> 
//         </div> 
//     ); 



// }

// export default Products; 