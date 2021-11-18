import React from "react";
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import { getOneProduct } from "../api.js"; 
import { Typography,Card, Rating, Box, Container, Button, CardActionArea, CardActions, Grid, Paper } from '@mui/material';

/**
 * Страница товара
 * @returns 
 */
function Product() {
    const params = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getOneProduct(params.id).then((data) => {
        setProduct(data);
        console.log(data);
        setLoading(false);
      });
    }, [params.id]);
  
    return (
        <Container> 
            <Box>
                <h1>{product.title}</h1>
            </Box> 
            <Grid container> 
                {/* Картинка */}
                <Grid item md={7}>
                    <img src={product?.image ? product.image[0].path : undefined} alt={product.title} width="100%" /> 
                </Grid>
                {/* @ Картинка */}
                {/* Боковая панель информации */}
                <Grid item sx={{ ml: 3, p: 1 }} md={4}>
                    <Grid container>
                        <Grid item md={6} sx={{mb:2}}>
                            <Rating name="read-only" value={3} readOnly size="small"/>  
                        </Grid> 
                        <Grid item md={6} sx={{ textAlign: 'right' }}>
                            <Typography className="article">Артикул: {product.article}</Typography>
                        </Grid>
                    </Grid> 
                    <Card sx={{ p: 3}}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="h5" className="price">{product.price} руб</Typography>
                        <Button variant="outlined" size="large" sx={{width:"100%", mt:3}}>Добавить в корзину</Button>
                    </Card>
                </Grid>
                {/* @ Боковая панель информации */}
            </Grid> 
        </Container> 
    );
  }
  
  export default Product;
  