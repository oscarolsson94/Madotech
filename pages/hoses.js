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
import Layout from "../components/Layout";
import data from "../utils/data";
import NextLink from "next/link";
import useStyles from "../utils/styles";
import dynamic from "next/dynamic";

function Hoses() {
  const classes = useStyles();
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
                        <Typography>{product.name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </NextLink>
                  <CardActions>
                    <Typography>{product.price} kr</Typography>
                    <Button size="small" variant="contained" color="primary">
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
