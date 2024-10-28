import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/CartPage";
import Special from "./Pages/specialPage/specialOffersPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/special" element={<Special />} />
      </Routes>
    </div>
  );
}

export default App;
