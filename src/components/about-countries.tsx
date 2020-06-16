import React from "react";
import AboutCountriesContent from "./about-countries-content";
import Element from "./app/element";

const AboutCountries = () => {
  const title = "Where I lived";
  return (
    <div>
      <Element title={title}>
        <AboutCountriesContent></AboutCountriesContent>
      </Element>
    </div>
  );
};

export default AboutCountries;
