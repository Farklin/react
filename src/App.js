import logo from './logo.svg';
import './App.css';
import { Box, Container, Button, CardActionArea, CardActions, Grid, Paper } from '@mui/material';
import Header from './Components/General/Header/Header'; 
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import Category from './Components/Category/Category';
import Product from './Components/Product/Product'; 

function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="catalog/:id" element={<Category />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
    </div> 
  );
}


export default App; 

