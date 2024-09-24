"use client";

import Image from "next/image";

function Contact_us() {
  return (
    <div>
      <div className=" flex flex-row items-center justify-center w-[100%] my-28 ">
        <div className="flex flex-col ml-40 w-[500px]">
          <p className="uppercase text-lg mt-16  ">Socios Digitales</p>
          <h3 className="w-96 font-bold text-4xl my-3">
            Nuestra cultura de trabajo, la clave del exíto
          </h3>
          <p className=" text-base my-3 mb-8">
            Nos define nuestro equipo. Desarrollamos con talento y creatividad
            los mejores proyectos del mercado.
          </p>
          <button className=" dark:bg-gray-950  rounded-3xl p-2 text-white font-bold text-base w-36 text-center">
            Contáctanos
          </button>
        </div>

        <div className="flex flex-col w-auto overflow-hidden rounded-xl mx-16">
          <Image
            className="w-[800px] h-[260px]"
            src={
              "https://i.postimg.cc/k4VWXJx1/pexels-fauxels-3184167.jpg"
            }
            alt=""
            width={800}
            height={600}
          />

          <div className=" dark:bg-gray-950  text-white h-28 px-8 py-2">
            <h1 className="text-3xl font-bold">Confiabilidad</h1>
            <p className="text-lg w-[500px]  py-1">Tus proyectos garantizados por el personal mas calificado de la industria</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_us;
