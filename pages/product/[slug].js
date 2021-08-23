import { Link } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import NextLink from "next/link";
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
    </Layout>
  );
};

export default ProductScreen;
