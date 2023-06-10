import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const BaseSpa = () => {
  //the nav should go here
  // const waveOneStyle = {
  //   background: `url(${WaveOne})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundColor: "rgb(203 213 225);",
  // };

  return (
    <div className="bg-slate-300">
      {/* <img src={WaveOne}></img> */}
      <div className="card-body ">
        <Navbar />
      </div>

      <div className="divider"></div>
      <Outlet />
      <div className="divider"></div>
      <div className="card-body ">
        <Footer />
      </div>
    </div>
  );
};

export { BaseSpa };
