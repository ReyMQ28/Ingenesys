import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Mensaje from "@/components/Mensajes";
import Recuerdos from "@/components/Recuerdos";
import Sonido from "@/components/Sonido";

export default function Home() {
  const mensajes = [
    "A tu lado me siento seguro.",
    "Me haces sentir amado y protegido.",
    "Eres la mujer que me quita el sueño.",
    "Cuando estoy junto a ti no existe nadie más.",
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Header />
        <Sonido />

        <div className="p-8 bg-white rounded-lg shadow-lg max-w-lg mx-auto mt-10">
          <h2 className="text-3xl sm:text-3xl font-bold text-center text-red-500 mb-4">
            Nuestros Recuerdos Especiales
          </h2>

          <Recuerdos />
        </div>

        <div className="p-8 bg-white rounded-lg shadow-lg max-w-lg mx-auto mt-10">
          <h2 className="text-3xl sm:text-3xl font-bold text-center text-red-500 mb-4">
            Lo Que Me Haces Sentir
          </h2>
          <ul className="space-y-2">
            {mensajes.map((mensaje, index) => (
              <Mensaje key={index} texto={mensaje} />
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
}
