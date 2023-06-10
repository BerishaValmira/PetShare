import basicimg from "../assets/react.svg";

import { Stage, Sprite } from "@pixi/react";

const Slider = () => {
  console.log(basicimg);
  return (
    <Stage width={300} height={300} className="card">
      <Sprite image={`${basicimg}`} x={0} y={0} width={300} height={300} />
      <Sprite image={`${basicimg}`} x={300} y={0} width={300} height={300} />
      <Sprite image={`${basicimg}`} x={1300} y={0} width={300} height={300} />
      {/* Add more slides as needed */}
    </Stage>
  );
};

export default Slider;
