import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
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
            height={800}
            layout="responsive"
          ></Image>
        </div>
        <h1>Product Categories</h1>
        <Grid container spacing={3}>
          {data.categories.map((category) => (
            <Grid item md={3} sm={6} xs={12} key={category.image}>
              <Card className={classes.shadow}>
                <NextLink href={`/${category.name.toLowerCase()}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={category.image}
                      title={category.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography align="center" className={classes.bold}>
                        {category.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
