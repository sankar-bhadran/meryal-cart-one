import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/CartPage";
import Special from "./Pages/specialPage/specialOffersPage";
import SignupForm from "./Pages/SignupForm/SignupForm";
import SeasonPage from "./Pages/SeasonPasses/SeasonPage";
import MeryalHome from "./Pages/HomePage/MeryalHome";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/buy" element={<Cart />} />
        <Route path="/special" element={<Special />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/seasonpass" element={<SeasonPage />} />
        <Route path="/" element={<MeryalHome />} />
      </Routes>
    </div>
  );
}

export default App;
