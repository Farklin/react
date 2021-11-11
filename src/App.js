import logo from './logo.svg';
import './App.css';
import Greetings from './Greeting.js'; 
import List from './Req.js'; 
import SimpleForm from './SimplForm.js'; 
import ProductsList from './Products.js'
import State from './State.js';
import Sitebar from './Components/Sitebar';
import Search from './Components/Search.js';
import { Box, Container, Button, CardActionArea, CardActions, Grid, Paper } from '@mui/material';
import Header from './Components/Header'; 


function App() {
  return (
 
    <Box>
      <Header /> 
      <Container> 
        <Grid container spacing={0}>
          <Grid md={2}> 
            <Sitebar />
          </Grid> 
          <Grid md={10}> 
            <ProductsList /> 
          </Grid> 
        </Grid> 
      </Container> 
    </Box>
  );
}



export default App; 

