import Layout from "../components/layout/Layout";
import "../styles/globals.css";

// Component реквізит який має фактичну сторінку яку буде відображено
// PageProps
const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
