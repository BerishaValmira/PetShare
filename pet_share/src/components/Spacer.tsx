import { useEffect } from "react";

const Spacer = ({ space = 1 }: { space?: number }) => {
  const spaceNum = Array.from({ length: space });
  useEffect(() => {
    console.log(spaceNum.length);
  }, []);
  return (
    <>
      {spaceNum.map((_) => (
        <div className="divider"></div>
      ))}
    </>
  );
};

export { Spacer };
