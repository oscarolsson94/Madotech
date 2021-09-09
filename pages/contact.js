import { Grid, List, ListItem, Typography } from "@material-ui/core";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import Image from "next/image";

function Contact() {
  return (
    <Layout title="Contact page" description="Who are we">
      <Typography variant="h1">Contact us</Typography>
      <Grid container spacing={1}>
        <Grid item md={12} xs={12}>
          <List>
            <ListItem>
              <Image
                src="/images/Helmut.jpg"
                alt="Helmut"
                width={450}
                height={500}
              ></Image>
            </ListItem>
            <ListItem>
              <Typography>Test</Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item md={12} xs={12}>
          <List>
            <ListItem>
              <Image
                src="/images/Torbjorn.jpg"
                alt="Torbjorn"
                width={450}
                height={500}
              ></Image>
            </ListItem>
            <ListItem>
              <Typography>Test</Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d135808.92422171673!2d12.167511512051897!3d57.8689613057541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464550c77d5b6da7%3A0x558eb2ef63363c8b!2zU3RlbmJva8OkcnJzdsOkZ2VuIDEzLCA0NDMgNzIgR3LDpWJv!5e0!3m2!1ssv!2sse!4v1630003048256!5m2!1ssv!2sse"></iframe>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
