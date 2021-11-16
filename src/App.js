import logo from './logo.svg';
import './App.css';
import { Box, Container, Button, CardActionArea, CardActions, Grid, Paper } from '@mui/material';
import Header from './Components/Header'; 
import Content from './Content.js'; 

function App() {
  return (
    <Box>
      <Header /> 
      <Container> 
        <Content /> 
      </Container> 
    </Box>
  );
}



export default App; 

