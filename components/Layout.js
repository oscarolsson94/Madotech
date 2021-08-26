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
import { ShoppingCart } from "@material-ui/icons";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import Head from "next/head";
import React, { useContext } from "react";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";

const Layout = ({ title, children, description }) => {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;

  const burgerStyles = {
    bmBurgerButton: {
      position: "relative",
      width: "26px",
      height: "20px",
      right: "50px",
      top: "15px",
      float: "right",
    },
    bmBurgerBars: {
      background: "#ffffff",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#ffffff",
    },
    bmMenuWrap: {
      position: "fixed",
      top: 0,
      height: "100%",
    },
    bmMenu: {
      /* entire background color */
      background: "#255f85",
      padding: "2.5em 1.5em 0",
      fontSize: "1.2em",
      lineHeight: "2.5em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
      display: "flex",
      flexDirection: "column",
    },
    bmItem: {
      color: "#ffffff",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

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

  const isMobile = useMediaQuery({ maxWidth: 600 });

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
              {isMobile ? (
                <Menu right styles={burgerStyles}>
                  <NextLink href="/" passHref>
                    <div className={classes.linkdiv}>
                      <HomeOutlinedIcon className={classes.links} />
                      <Link>Home</Link>
                    </div>
                  </NextLink>
                  <NextLink href="/contact" passHref>
                    <div className={classes.linkdiv}>
                      <EmailOutlinedIcon className={classes.links} />
                      <Link>Contact</Link>
                    </div>
                  </NextLink>
                  <NextLink href="/about" passHref>
                    <div className={classes.linkdiv}>
                      <QuestionAnswerOutlinedIcon className={classes.links} />
                      <Link>About us</Link>
                    </div>
                  </NextLink>
                  <Switch
                    checked={darkMode}
                    onChange={darkModeChangeHandler}
                  ></Switch>
                </Menu>
              ) : (
                <>
                  <NextLink href="/" passHref>
                    <Link>Home</Link>
                  </NextLink>
                  <NextLink href="/contact" passHref>
                    <Link>Contact</Link>
                  </NextLink>
                  <NextLink href="/about" passHref>
                    <Link>About us</Link>
                  </NextLink>
                  <Switch
                    checked={darkMode}
                    onChange={darkModeChangeHandler}
                  ></Switch>
                </>
              )}
              <NextLink href="/cart" passHref>
                <Link>
                  {cart.cartItems.length > 0 ? (
                    <Badge badgeContent={cart.cartItems.length} color="primary">
                      <ShoppingCart />
                    </Badge>
                  ) : (
                    <ShoppingCart />
                  )}
                </Link>
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
