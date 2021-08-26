import dynamic from "next/dynamic";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <div>Contact page</div>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
