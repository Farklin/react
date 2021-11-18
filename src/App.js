import logo from './logo.svg';
import './App.css';
import { Box, Container, Button, CardActionArea, CardActions, Grid, Paper } from '@mui/material';
import Header from './Components/Header'; 
import Content from './Content.js'; 
import ProductList from './Catalog/ProductList'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import Catalog from './Catalog/Catalog';
import Product from './Product/Product'; 

function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="catalog/:id" element={<Catalog />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
    </div> 
  );
}


export default App; 

