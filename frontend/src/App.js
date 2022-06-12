import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeroList from "./components/HeroList.js";
import AddHero from "./components/AddHero.js";
import EditHero from "./components/EditHero.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroList/>}/>
        <Route path="add" element={<AddHero/>}/>
        <Route path="marksmanlist" element={<AddHero/>}/>
        <Route path="edit/:id" element={<EditHero/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
