import Image from "next/image";

const Header = () => {
  return (
   <>
    <div className="flex flex-col h-svh">
   <header className=" p-4 ">

   <Image
          src="/img/doctor_banner.png"  // Cambia por la ruta de tu imagen
          alt="Imagen de fondo"
          fill={true}
          style={{ objectFit: 'cover'}} 
          priority={true}  // Para optimizar la carga de la imagen
          
      />

    <nav className="top-0 left-0 w-full  absolute bg-black bg-opacity-30"  >
    <div className="text-lg h-[15rem]">Mi Sitio</div>
          <ul className="hidden md:flex space-x-4">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#" className="hover:underline">Servicios</a></li>
            <li><a href="#" className="hover:underline">Contacto</a></li>
          </ul>
    </nav>


      
   
            {/* <h1 className="text-red-600">asfds</h1>
            <Image src="/img/logo_clc_blanco.png" alt="clc_logo" width={150} height="150"   priority/>
            <h1>Header</h1> */}


    </header>

    </div>
   </>
  )
}

export default Header