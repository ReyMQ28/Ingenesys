import Image from "next/image";

function InfoSection() {
  return (
    <div className="md:w-full md:mb-20 xl:mb-0 md:pt-36 md:pb-16 sm:pt-28 sm:pb-4">
      <div className="w-full">
        <Image
          className="md:w-full md:h-[100%] md:flex sm:hidden brightness-50 overflow-hidden blop "
          src={"https://i.postimg.cc/SRY5fQ8F/59303763700641-5ab98ff858d38.gif"}
          alt=""
          width={1080}
          height={640}
        />

        <Image
          className=" sm:w-full sm:h-60 sm:flex md:hidden brightness-50 overflow-hidden "
          src={"https://i.postimg.cc/SRY5fQ8F/59303763700641-5ab98ff858d38.gif"}
          alt=""
          width={1080}
          height={640}
        />
        <div className="flex flex-col items-center justify-center md:absolute sm:absolute md:-mt-[500px] sm:-mt-[195px] md:px-10">
          <h1 className="md:text-7xl xl:text-8xl sm:text-5xl sm:px-5 sm:mb-0 font-bold text-center md:text-white sm:text-gray-200 ">
            Innovacion tecnologica y en ingenieria
          </h1>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
