import React, { useState } from "react";
import { Box, Container, Button, CardActionArea, CardActions, Grid, Paper } from '@mui/material';
import ListProduct from './ProductList'; 

class Catalog extends React.Component {
    render() {
        return(
        <Container>
            <Box>
                <Container>
                    <ListProduct /> 
                </Container>
            </Box>
        </Container>
        ); 
    }
}

export default Catalog; 