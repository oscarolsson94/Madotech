import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import NextLink from "next/link";
import Image from "next/image";
import useStyles from "../../utils/styles";
import { Store } from "../../utils/Store";

const ProductScreen = () => {
  const { state, dispatch } = useContext(Store);

  const classes = useStyles();

  const router = useRouter();
  const { slug } = router.query;

  const product = data.products.find((product) => product.slug === slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };

  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>Back to Products</Link>
        </NextLink>
        {` | ${slug}`}
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={6} xs={12}>
          <List>
            <ListItem>
              <Typography
                component="h1"
                variant="h1"
              >{`Oilsafe ${product.name}`}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Availability: <span className={classes.span}>In Stock</span>
              </Typography>
            </ListItem>
            <ListItem>
              <Image
                src="/images/oilsafe_logo.jpg"
                alt="oilsafe logo"
                width={110}
                height={30}
              ></Image>
            </ListItem>
            <ListItem>
              <Typography>{`Price: ${product.price} kr`}</Typography>
            </ListItem>

            <ListItem>
              <Typography>{product.description}</Typography>
            </ListItem>
            <ListItem>
              <Button
                onClick={addToCartHandler}
                fullWidth
                variant="contained"
                color="primary"
              >
                <AddShoppingCartOutlinedIcon />
                Add to cart
              </Button>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Typography variant="h2">Details</Typography>
      <Divider className={classes.lineBreak} />
      <Typography>{product.details}</Typography>
      {product.prodsheet && (
        <NextLink target="_blank" href={product.prodsheet} passHref>
          <div className={classes.linkdiv}>
            <PictureAsPdfIcon />
            <Link>Link to detailed product data sheet (PDF)</Link>
          </div>
        </NextLink>
      )}
    </Layout>
  );
};

export default ProductScreen;
