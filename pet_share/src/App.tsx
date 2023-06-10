import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BaseSpa } from "./pages/BaseSpa";
import { Pets } from "./pages/Pets";
import { PetForm } from "./pages/PetForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<BaseSpa />}>
          <Route path="" element={<Home />} />
          <Route path="pets" element={<Pets />} />
          <Route path="pet-add" element={<PetForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
