import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  Divider,
  Link,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
  Badge,
} from "@material-ui/core";
import Head from "next/head";
import React, { useContext } from "react";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";

const Layout = ({ title, children, description }) => {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state; //Getting access to darkMode from context

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 600,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      body1: {
        fontWeight: "normal",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#FFC857",
      },
      secondary: {
        main: "#255f85",
      },
    },
  });

  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Madotech` : "Madotech"} </title>
        {description && <meta name="description" content={description}></meta>}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar className={classes.navbar} position="sticky">
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Madotech</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link>
                  {cart.cartItems.length > 0 ? (
                    <Badge badgeContent={cart.cartItems.length} color="primary">
                      Cart
                    </Badge>
                  ) : (
                    "Cart"
                  )}
                </Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <Divider className={classes.lineBreak} />
        <footer className={classes.footer}>
          <Typography>All rights reserved. Madotech</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
