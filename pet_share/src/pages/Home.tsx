import Slider from "../components/Slider";
import { Spacer } from "../components/Spacer";
import { TextCardsList } from "../components/TextCardsList";
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
