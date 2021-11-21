import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Chip,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Rating,
  Paper,
} from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import { getCategoryProduct } from "../../api.js";
import { useState, useEffect } from "react";
import { Link } from "@mui/material";
import memoize from "lodash.memoize";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      price: "",
      image: "",
      action: false,
      href: "",
      nameButton: "В корзину",
    };
  }

  action(status) {
    if (status) {
      return <Chip label="Акция" color="warning" />;
    } else {
      return "";
    }
  }

  render() {
    return (
      <Card md={12} sx={{ maxWidth: 400, minHeight: 300 }}>
        <Link href={"/product/" + this.props.id}>
          <Box component="div" xs={{ m: 2 }}>
            <action status={this.props.action} />
          </Box>
          <CardMedia
            component="img"
            maxHeight="100%"
            minWidth="100%"
            image={this.props.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography component="div">{this.props.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              <Rating name="read-only" value={3} readOnly size="small" />
            </Typography>
            <Typography variant="h6" color="text.inherit">
              {this.props.price} руб.
            </Typography>
          </CardContent>
        </Link>
        <Button size="small" color="primary">
          {this.props.nameButton}
        </Button>
      </Card>
    );
  }
}

// class ProductsList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             products: [],
//         }

//     }

//     componentDidMount() {
//         const { id } = this.props.params;
//         getCategoryProduct(this.props.match.params.id)
//         .then(
//             (result ) => {
//                 this.setState({
//                         products: result,
//                     });
//             },
//         )
//     }

//     render() {
//         const  {products} = this.state;
//         return (
//             <Grid container spacing={0}>
//                 {
//                     products.map((item) =>
//                         <Grid item sx={{mt:2, p:1}} md={4}>
//                             <Product title = {item.title} price = {item.price} image = {""} action={true}  />
//                         </Grid>
//                     )
//                 }
//             </Grid>
//         );
//     }
// }

function ProductList() {
  const { search } = useLocation();
  const params = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(params.id + search);
    getCategoryProduct(params.id + search).then((data) => {
      setProducts(data.data);
      setLoading(false);
      console.log(data.data);
    });
  }, [params.id]);

  return (
    <Grid container spacing={0}>
      {products.map((item) => (
        <Grid item sx={{ mt: 2, p: 1 }} md={4}>
          <Product
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image[0].path}
            action={true}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
