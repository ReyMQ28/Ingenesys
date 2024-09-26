"use client";

import Image from "next/image";

function Contact_us() {
  return (
    <div className=" flex md:flex-row sm:flex-col md:items-center md:justify-center sm:items-center sm:justify-center md:w-[100%] sm:w-96 sm:mb-16 md:my-28 sm:my-6">
      <div className="flex flex-col md:ml-32 md:w-[500px] sm:w-80 sm:mb-0">
        <p className="uppercase md:text-lg md:mt-16 sm:text-lg sm:mt-16 sm:mb-4">
          Socios Digitales
        </p>
        <h3 className="md:w-96 sm:w-auto md:font-bold md:text-4xl md:my-3 sm:font-bold sm:text-4xl sm:my-3">
          Nuestra cultura de trabajo, la clave del exíto
        </h3>
        <p className=" md:text-base sm:text-lg md:my-3 md:mb-8 sm:w-auto sm:my-5 sm:mb-10">
          Nos define nuestro equipo. Desarrollamos con talento y creatividad los
          mejores proyectos del mercado.
        </p>
        <button className="bg-gray-950 md:flex md:justify-center sm:hidden rounded-3xl p-2 text-white font-bold text-base w-36 text-center">
          Contáctanos
        </button>
      </div>

      <div className="flex flex-col md:w-auto sm:min-w-min sm:justify-center sm:items-center md:overflow-hidden md:rounded-xl sm:overflow-hidden sm:rounded-xl md:mx-16 sm:mx-8 md:px-0 sm:mb-8">
        <Image
          className=" flex md:w-[800px] md:h-[312px] sm:w-auto sm:h-[260px]"
          src={"https://i.postimg.cc/k4VWXJx1/pexels-fauxels-3184167.jpg"}
          alt=""
          width={800}
          height={600}
        />

        <div className="bg-gray-950 w-full text-white md:h-28 sm:h-60 md:px-6 md:py-0 sm:pt-8  sm:px-10 ">
          <h1 className="md:text-3xl sm:text-2xl sm:py-2 md:py-0 font-bold">
            Confiabilidad
          </h1>
          <p className="md:text-lg sm:text-base md:w-[500px] md:py-1 sm:pr-2 sm:my-2 ">
            Tus proyectos garantizados por el personal mas calificado de la
            industria
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start">
        <button className=" bg-gray-950 md:hidden sm:flex sm:justify-center rounded-3xl p-2 text-white font-bold text-base w-36 text-center">
          Contactanos
        </button>
      </div>
    </div>
  );
}

export default Contact_us;
