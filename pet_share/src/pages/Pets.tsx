import { useEffect } from "react";
import { Card } from "../components/Card";
import { Pagination } from "../components/Pagination";
import { Loading } from "../components/Loading";
import { usePetsHook } from "../slices/usePetsHook";

const Pets = () => {
  const { fetch, data, state } = usePetsHook();

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className="px-4">
      {state === "loading" && <Loading />}
      {state === "success" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {data.map((pet) => (
            <Card
              title={pet.name}
              category={pet.type}
              message={pet.description}
              imageData={pet.image}
              audioData={pet.audio}
            />
          ))}
        </div>
      )}
      <div className="flex justify-center mt-8">
        <Pagination />
      </div>
    </div>
  );
};

export { Pets };
