import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#255f85",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
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
});
export default useStyles;
