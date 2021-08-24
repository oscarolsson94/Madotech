import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CardActions,
  Button,
  Divider,
  Link,
} from "@material-ui/core";
import Layout from "../components/Layout";
import data from "../utils/data";
import NextLink from "next/link";
import useStyles from "../utils/styles";

export default function Lids() {
  const classes = useStyles();
  return (
    <Layout>
      <div>
        <div className={classes.section}>
          <NextLink href="/" passHref>
            <Link>Back to Products</Link>
          </NextLink>
          {` | Lids`}
        </div>
        <h1>Mini Spout Lids</h1>
        <Grid container spacing={3}>
          {data.products
            .filter((product) => product.category === "MiniSpoutLid")
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
          <Divider />
        </Grid>
        <h1>Storage Lids</h1>
        <Grid container spacing={3}>
          {data.products
            .filter((product) => product.category === "StorageLid")
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
        <h1>Stretch Spout Lids</h1>
        <Grid container spacing={3}>
          {data.products
            .filter((product) => product.category === "StretchSpoutLid")
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
        <h1>Stumpy Spout Lids</h1>
        <Grid container spacing={3}>
          {data.products
            .filter((product) => product.category === "StumpySpoutLid")
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
        <h1>Utility Lids</h1>
        <Grid container spacing={3}>
          {data.products
            .filter((product) => product.category === "UtilityLid")
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
