import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#255f85",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
      marginRight: 10,
      fontWeight: "bold",
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
    textAlign: "center",
    marginTop: 10,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  span: {
    color: "green",
    fontWeight: "bold",
  },
  lineBreak: {
    marginTop: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  yellowText: {
    color: "#FFC857",
    fontWeight: "bold",
  },
});
export default useStyles;
