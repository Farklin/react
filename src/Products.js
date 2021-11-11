
import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, Chip, Rating, Button, CardActionArea, CardActions, Grid, Paper } from '@mui/material';


class CustomRaiting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    render(){
        return (
            <div> 
                <Rating name="read-only" value={this.props.value} readOnly size="small" />
            </div> 
        ); 
      
    }
   
}

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            price: "",
            image: "",
            action: false, 
            nameButton: "В корзину", 
        }
    }

    action(status){
        if(status){
            return (<Chip label="Акция" color="warning" />); 
        }else{ return "" }
        
    }

    render() {
        return (
            <Card md={12} sx={{ maxWidth: 400, minHeight: 300, }}>
                <Box component="div" xs={{m:2}}>
                    <action status={this.props.action} /> 
                </Box>
                <CardMedia
                    component="img"
                    minHeight="100%"
                    minWidth="100%"
                    image={ this.props.image }
                    alt="green iguana"
                />
                <CardContent>
                    <Typography component="div">
                        { this.props.title }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    <CustomRaiting value="3" /> 
                    </Typography>
                    <Typography variant="h6" color="text.inherit">
                        { this.props.price } руб.  
                    </Typography> 
                </CardContent> 
                <Button size="small" color="primary">
                    {this.props.nameButton}
                </Button>
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
            <Grid container spacing={0}>
                {
                    products.map((item) => 
                        <Grid item sx={{mt:2, p:2}} md={4}>
                            <Product title = {item.title} price = {item.price} image = {"https://teisbubble.ru" + item.image.thumbnail} action={true}  />
                        </Grid> 
                    )
                }
            </Grid>
        );
    }
}

export default ProductsList;