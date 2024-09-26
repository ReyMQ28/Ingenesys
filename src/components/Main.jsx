import Acordeon from "./Navbar/Acordeon";
import Contact_us from "./Contact_us";
import Hamburguer from "./Navbar/Hamburguer";
import InfoSection from "./InfoSection";

function Main() {
  return (
    <div className=" flex sm:flex-col items-center sm:justify-center ">
      
      <InfoSection />
      <Contact_us />
    </div>
  );
}

export default Main;
