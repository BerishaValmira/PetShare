import React, { useEffect, useRef } from "react";
import { Stage, Sprite, useTick } from "@pixi/react";
import * as PIXI from "pixi.js";
const BunnyComponent = () => {
  const bunnyRef = useRef(null);
  const onTick = (delta) => {
    if (bunnyRef.current) {
      bunnyRef.current.rotation += 0.1 * delta;
    }
  };

  useTick(onTick);

  return (
    <Sprite
      ref={bunnyRef}
      image="../src/assets/bone.svg"
      anchor={0.5}
      x={window.innerWidth / 16}
      y={window.innerHeight / 16}
    />
  );
};

const Animation = () => {
  const app = new PIXI.Application({ background: "rgb(203 213 225)" });
  useEffect(() => {
    const handleResize = () => {
      // Adjust the stage size on window resize
      app.renderer.resize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Stage
      width={window.innerWidth / 8}
      height={window.innerHeight / 8}
      options={{ background: "rgb(203 213 225)" }}
    >
      <BunnyComponent />
    </Stage>
  );
};

export default Animation;
