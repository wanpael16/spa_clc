import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";



const Frontend = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`Clasificacion Next - ${title}`}</title>
      </Head>
      <Header />
      <div className="container-general">{children}</div>
      <Footer />
    </>
  );
};

export default Frontend;
