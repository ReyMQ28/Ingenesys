import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

function Acordeon() {
  return (
    <div
      className="w-24 -mt-2
    "
    >
      <Accordion className="border-transparent absolute"  allowToggle>
        <AccordionItem border={null}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Servicios
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={2}>
            <div>
              <Accordion allowToggle className="border-transparent">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        1
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Acordeon;
