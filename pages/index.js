// import Image from "next/image";
// import localFont from "next/font/local";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

import Frontend from "@/componentes/Frontend";

export default function Home() {
  return (
   <>
     <Frontend title={'Inicio'}>
      <h1> Hola mundo desde Nextjs</h1>
     </Frontend>
   </>
  );
}
