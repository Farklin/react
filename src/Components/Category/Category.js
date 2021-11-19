import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Paper,
} from "@mui/material";
import ProductList from "./ProductList";
import Sitebar from "../Navigation/Sitebar";

class Category extends React.Component {
  render() {
    return (
      <Container>
        <Grid container spacing={0}>
          <Grid item md={3}>
            <Sitebar />
          </Grid>
          <Grid item md={9}>
            <ProductList />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Category;
