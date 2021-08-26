import dynamic from "next/dynamic";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div>About page</div>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(About), { ssr: false });
