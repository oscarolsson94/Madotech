import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import Layout from "../components/Layout";
import data from "../utils/data";
import NextLink from "next/link";
import useStyles from "../utils/styles";
import Image from "next/image";

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div>
        <div className={classes.banner}>
          <Image
            src={"/images/ship.jpg"}
            alt={"ship in the ocean"}
            width={1920}
            height={700}
            layout="responsive"
          ></Image>
        </div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} sm={6} xs={12} key={product.image}>
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
