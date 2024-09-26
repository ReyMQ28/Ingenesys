import {
  Accordion,
  AccordionIcon,
  AccordionItem,
  useBoolean,
} from "@chakra-ui/react";
import Link from "next/link";

function Acordeon() {
  const [flag, setFlag] = useBoolean();
  return (
    <div
      className="w-24 
    "
    >
      <Accordion
        className="border-transparent fixed"
        allowToggle
        onMouseEnter={setFlag.on}
      >
        <AccordionItem border={null}>
          <h2>
            <div
              className=""
              onMouseEnter={setFlag.on}
              onMouseLeave={setFlag.off}
            >
              {flag ? (
                <div className="flex flex-col bg-transparent">
                  <h1 className="mb-4 bg-transparent w-24 md:dark:hover:text-blue-500 hover:text-blue-700">
                    Servicios <AccordionIcon className="fixed mt-1 " />
                  </h1>
                  <div className="flex flex-col gap- w-52 pb-3 dark:bg-gray-950 bg-white">
                    <Link href={"/desarrollo"}>
                      <p className="pl-3 p-1 md:dark:hover:bg-gray-100 md:dark:hover:text-gray-950 hover:bg-gray-950 hover:text-white">
                        Desarrollo
                      </p>
                    </Link>
                    <Link href={"/tecnologia"}>
                      <p
                        className="pl-3 p-1 md:dark:hover:bg-gray-100 md:dark:hover:text-gray-950 hover:bg-gray-950
                       hover:text-white"
                      >
                        Tecnologia
                      </p>
                    </Link>
                    <Link href={"/industria"}>
                      <p
                        className="pl-3 p-1 md:dark:hover:bg-gray-100 md:dark:hover:text-gray-950 hover:bg-gray-950
                       hover:text-white"
                      >
                        Industria
                      </p>
                    </Link>
                  </div>
                </div>
              ) : (
                <p>
                  Servicios <AccordionIcon className="fixed mt-1" />{" "}
                </p>
              )}
            </div>
          </h2>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Acordeon;
