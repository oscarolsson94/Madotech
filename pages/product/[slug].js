import { Grid, Link, List, ListItem } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import NextLink from "next/link";
import Image from "next/image";
import useStyles from "../../utils/styles";

const ProductScreen = () => {
  const classes = useStyles();

  const router = useRouter();
  const { slug } = router.query;

  const product = data.products.find((product) => product.slug === slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>Back to Products</Link>
        </NextLink>
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
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>Category: {product.category}</ListItem>
            <ListItem>
              Availability: <span className={classes.span}>In Stock</span>
            </ListItem>
            <ListItem>
              <Image
                src="/images/oilsafe_logo.jpg"
                alt="oilsafe logo"
                width={110}
                height={30}
              ></Image>
            </ListItem>
            <ListItem>{`Price: ${product.price} kr`}</ListItem>
            <ListItem>{`Oilsafe ${product.name}`}</ListItem>
            <ListItem>{product.description}</ListItem>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductScreen;
