import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import React from "react";
import useStyles from "../utils/styles";
import NextLink from "next/link";

const Layout = ({ title, children, description }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Madotech` : "Madotech"} </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Madotech</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Madotech</Typography>
      </footer>
    </div>
  );
};

export default Layout;
