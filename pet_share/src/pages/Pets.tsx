import { useEffect } from "react";
import { Card } from "../components/Card";
import { Pagination } from "../components/Pagination";
import { Loading } from "../components/Loading";
import { usePetsHook } from "../slices/usePetsHook";
import { useSearchParams } from "react-router-dom";

const Pets = () => {
  const { fetch, data, state } = usePetsHook();

  const [searchParams, setSearchParams] = useSearchParams();

  const onCurrentClick = (input: string) => {
    data && searchParams.set("page", (parseInt(input) - 1).toString());

    // Update the query parameters
    setSearchParams(searchParams);
  };

  const onNextClick = () => {
    data && searchParams.set("page", (data?.page + 1).toString());

    // Update the query parameters
    setSearchParams(searchParams);
  };

  const onPrevClick = () => {
    data && searchParams.set("page", (data?.page - 1).toString());

    // Update the query parameters
    setSearchParams(searchParams);
  };

  useEffect(() => {
    fetch({ params: searchParams });
  }, [fetch, searchParams]);

  return (
    <div className="px-4">
      {state === "loading" && <Loading />}
      {state === "success" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {data?.data.map((pet) => (
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
        {data && (
          <Pagination
            onPrev={onPrevClick}
            onNext={onNextClick}
            onClick={onCurrentClick}
            totalPages={data.total}
            page={data.page + 1}
          />
        )}
      </div>
    </div>
  );
};

export { Pets };
