import React from "react";
import WaveOne from "../assets/wave1.svg";

const WavyBackround = () => {
  return (
    <div
      className="bg-cover bg-center w-screen h-screen"
      style={{ backgroundImage: `url(${WaveOne})` }}
    >
      Hello there
    </div>
  );
};

export { WavyBackround };
