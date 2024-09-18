import Image from "next/image";

function Recuerdos() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center bg-pink-50 p-3 py-8 shadow-xl rounded-lg">
        <div className="flex items-center justify-center p-3 bg-pink-100 rounded mb-5 hover:bg-pink-50 cursor-pointer shadow-md">
          <span className="mr-4 text-red-500 ">
            La foto que más me encanta❤️{" "}
          </span>
        </div>
        <Image
          className="rounded-md"
          src="https://i.postimg.cc/GmLCWFx2/Whats-App-Image-2024-09-18-at-2-59-38-PM.jpg"
          alt=""
          width={400}
          height={300}
        />
      </div>
      <div className=" flex flex-col items-center justify-center bg-pink-50 p-3">
        <div className="flex items-center justify-center p-3 bg-pink-100 rounded mb-5 hover:bg-pink-50 cursor-pointer shadow-md">
          <span className="mr-4 text-red-500 ">
            Nuestra Primera Vez 🙈{" "}
          </span>
        </div>
        <Image
          className="rounded-md shadow-md"
          src="https://i.postimg.cc/v81Pq4RV/Whats-App-Image-2024-09-18-at-4-04-06-PM.jpg"
          alt=""
          width={400}
          height={250}
        />
      </div>
      <div className=" flex flex-col items-center justify-center bg-pink-50 p-3">
        <div className="flex items-center justify-center p-3 bg-pink-100 rounded mb-5 hover:bg-pink-50 cursor-pointer shadow-md">
          <span className="mr-4 text-red-500 ">
            La Propuesta de Noviazgo❤️{" "}
          </span>
        </div>
        <Image
          className="rounded-md"
          src="https://i.postimg.cc/v8p0pGMS/Whats-App-Image-2024-09-18-at-4-04-38-PM.jpg"
          alt=""
          width={400}
          height={300}
        />
      </div>
      <div className=" flex flex-col items-center justify-center bg-pink-50 p-3">
        <div className="flex items-center justify-center p-3 bg-pink-100 rounded mb-5 hover:bg-pink-50 cursor-pointer shadow-md">
          <span className="mr-4 text-red-500 ">
            Nuestra ChocoAventura Rola❤️{" "}
          </span>
        </div>
        <Image
          className="rounded-md"
          src="https://i.postimg.cc/5jdQpPhn/Whats-App-Image-2024-09-18-at-4-05-05-PM.jpg"
          alt=""
          width={400}
          height={300}
        />
      </div>
      
    </>
  );
}

export default Recuerdos;
