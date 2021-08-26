import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CardActions,
  Button,
  Link,
} from "@material-ui/core";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import Layout from "../components/Layout";
import data from "../utils/data";
import NextLink from "next/link";
import useStyles from "../utils/styles";
import dynamic from "next/dynamic";
import { useContext } from "react";
import { Store } from "../utils/Store";

function Hoses() {
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const addToCartHandler = (product) => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };
  return (
    <Layout>
      <div>
        <div className={classes.section}>
          <NextLink href="/" passHref>
            <Link>Back to Products</Link>
          </NextLink>
          {` | Hoses`}
        </div>
        <h1>Hoses</h1>
        <Grid container spacing={3}>
          {data.products
            .filter((product) => product.category === "Hoses")
            .map((product) => (
              <Grid item md={3} sm={6} xs={12} key={product.image}>
                <Card>
                  <NextLink href={`/product/${product.slug}`} passHref>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={product.image}
                        title={product.name}
                      ></CardMedia>
                      <CardContent>
                        <Typography className={classes.bold}>
                          {product.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </NextLink>
                  <CardActions>
                    <Typography className={classes.yellowText}>
                      {product.price} kr
                    </Typography>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      onClick={() => addToCartHandler(product)}
                    >
                      <AddShoppingCartOutlinedIcon />
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </div>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Hoses), { ssr: false });
