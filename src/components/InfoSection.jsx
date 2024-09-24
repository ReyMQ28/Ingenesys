import Image from "next/image";

function InfoSection() {
  return (
    
      <div className="w-auto md:mb-20 xl:mb-0 pt-36 pb-16">
        <div className="w-full">
          <Image
            className="w-full h-100%  blur- brightness-50 overflow-hidden blop"
            src={
              "https://i.postimg.cc/SRY5fQ8F/59303763700641-5ab98ff858d38.gif"
            }
            alt=""
            width={1080}
            height={640}
          />
          <div className="flex flex-col items-center justify-center md:absolute sm:absolute md:-mt-[500px] sm:-mt-[500px]  md:px-10">
            <h1 className="md:text-7xl sm:text-4xl font-bold text-center md:text-white sm:text-gray-100 ">
              Innovacion tecnologica y en ingenieria
            </h1>
          </div>
        </div>
      </div>
  
  );
}

export default InfoSection;
