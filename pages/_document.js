//ESTE DOCUMENTO ES COMO UN AYUDANTE DE LA CONSTRUCCION DEL LAYOUT DE LA APLICACION
import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* <link rel="stylesheet" href="" /> */}
        {/* <meta name="description" content="Clasificados Next"/>
        <meta name="Keywords" content="Clasificados Next"/>
        <meta name="author" content="andres@gmail.com"/> */}
        </Head> 
      <body className="antialiased" >
        <Main  />
       
        {/* archivos script */}
        <NextScript />
      </body>
    </Html>
  );
}
