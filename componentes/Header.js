import Image from "next/image";

const Header = () => {
  return (
   <>
        <div className="flex justify-center items-center h-screen">
        </div>
            <h1 className="text-red-600">asfds</h1>
            <Image src="/img/logo_clc_blanco.png" alt="clc_logo" width={150} height="150"   priority/>
            <h1>Header</h1>
   </>
  )
}

export default Header