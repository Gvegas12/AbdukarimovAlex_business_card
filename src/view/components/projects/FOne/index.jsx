import React from "react";
import SectionProject from "../../templates/SectionProject";
import bg from "./img/FOne.jpg";

const FOne = () => {
  return (
    <SectionProject
      title="FONE"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, doloribus!"
      urlToProject="/"
      urlToBgImage={bg}
    />
  );
};

export default FOne;
