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
      <div className="contenedor-principal">{children}</div>
      <Footer />
    </>
  );
};

export default Frontend;
