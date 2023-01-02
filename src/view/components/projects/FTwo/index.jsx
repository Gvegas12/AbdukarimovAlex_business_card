import React from "react";
import SectionProject from "../../templates/SectionProject";
import bg from "./img/FTwo.jpg";

const FTwo = () => {
  return (
    <SectionProject
      title="FTwo"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, doloribus!"
      urlToProject="/"
      urlToBgImage={bg}
    />
  );
};

export default FTwo;
