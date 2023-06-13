import React, { CSSProperties } from "react";
import Dog from "../assets/pix_dog.svg";

const DogLogo = () => {
  const css: CSSProperties = {
    width: "100px",
    height: "100px",
  };

  return (
    <div>
      <img src={Dog} alt="Dog Logo" style={css} />
    </div>
  );
};
export default DogLogo;
