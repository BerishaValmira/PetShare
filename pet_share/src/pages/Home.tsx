import Slider from "../components/Slider";
import { Spacer } from "../components/Spacer";
import { Stepper } from "../components/Stepper";
import { TextCard } from "../components/TextCard";
import { TextCardsList } from "../components/TextCardsList";
import { WavyBackround } from "../components/WavyBackround";

const Home = () => {
  // useEffect(()=>{},[number])

  return (
    <div className="flex flex-col items-center">
      <Slider />
      <Spacer />
      <TextCardsList />
    </div>
  );
};

export { Home };
