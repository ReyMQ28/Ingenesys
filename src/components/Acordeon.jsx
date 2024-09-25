import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
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
                  <h1 className="mb-4 bg-transparent w-24">
                    Servicios <AccordionIcon className="fixed mt-1 " />
                  </h1>
                  <div className="flex flex-col gap-3 pl-5 p-3 pb-6 w-52 dark:bg-gray-950 bg-white">
                    <Link href={"/"}><p>Desarrollo</p></Link>
                    <Link href={"/"}><p>Tecnologia</p></Link>
                    <Link href={"/"}><p>Industria</p></Link>
                  </div>
                </div>
              ) : (
                <p>
                  Servicios <AccordionIcon className="fixed mt-1" />{" "}
                </p>
              )}
            </div>
          </h2>
          <AccordionPanel pb={2}>
            <div>Desarrollo de software</div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Acordeon;
