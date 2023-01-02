import React from "react";
import SectionProject from "../../templates/SectionProject";
import bg from "./img/FThree.jpg";

const FThree = () => {
  return (
    <SectionProject
      title="FThree"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, doloribus!"
      urlToProject="/"
      urlToBgImage={bg}
    />
  );
};

export default FThree;
