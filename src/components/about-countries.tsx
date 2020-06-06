import React from "react";
import AboutCountriesContent from "./about-countries-content";
import Element from "./app/element";

const AboutCountries = () => {
  const title = "Where I lived";
  return (
    <Element title={title}>
      <AboutCountriesContent></AboutCountriesContent>
    </Element>
  );
};

export default AboutCountries;
