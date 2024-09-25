"use client"
import { useBoolean,AccordionIcon } from "@chakra-ui/react";
import React from "react";
import Acordeon from "./Acordeon";

function Test() {
  const [flag, setFlag] = useBoolean();

  return (
    <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
      {flag ? "" : "Servicios <Acor " }
    </div>
  );
}

export default Test;
