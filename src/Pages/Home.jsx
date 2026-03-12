import React from "react";
import { HeroImage } from "../Components/HeroImage";
import { Heading } from "../Components/Heading";
import { Gallery } from "../Components/Gallery";
import { UpperFooter } from "../Components/UpperFooter";





export const Home = () => {
  return(
  <>
  
   <HeroImage />
  <Heading/>
  <Gallery/>
  <UpperFooter/>

  </>
  );
};
