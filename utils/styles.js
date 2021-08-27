import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#255bbe",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
      marginRight: 10,
      fontWeight: "bold",
    },
    "& a:hover": {
      textDecoration: "none",
      color: "#FFC857",
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.8rem",
  },
  grow: {
    flexGrow: 1,
  },
  banner: {
    marginTop: 50,
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    backgroundColor: "#255bbe",
    minHeight: 100,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  shadow: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  span: {
    color: "green",
    fontWeight: "bold",
  },
  lineBreak: {
    marginTop: 10,
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  yellowText: {
    color: "#FFC857",
    fontWeight: "bold",
  },
  links: {
    marginRight: 10,
    color: "#ffffff",
  },
  linkdiv: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "& a:hover": {
      textDecoration: "none",
      color: "#FFC857",
    },
  },
  form: {
    width: "100%",
    maxWidth: 800,
    margin: "0 auto",
  },
});
export default useStyles;
