import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Industries from "./Pages/Industries";
import BusinessServices from "./Pages/BusinessServices";
import CreativeDigital from "./Pages/CreativeDigital";
import OtherServices from "./Pages/OtherServices";
import Templates from "./Pages/Templates";
import Pricing from "./Pages/Pricing";
import Agencies from "./Pages/Agencies";
import Consultancies from "./Pages/Consultancies";
import Professionals from "./Pages/Professionals";
import BookDemo from "./Pages/BookDemo";
import Views from "./Pages/Views";
import LoginRegister from "./LoginRegister";
import { Button } from "react-bootstrap";
import Dash from "./Dash";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="#" element={<Industries />} />
          <Route path="businessservices" element={<BusinessServices />} />
          <Route path="creativedigital" element={<CreativeDigital />} />
          <Route path="otherservices" element={<OtherServices />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="" element={<Pricing />} />
          <Route path="agencies" element={<Agencies />} />
          <Route path="consultancies" element={<Consultancies />} />
          <Route path="professionals" element={<Professionals />} />
          <Route path="/bookDemo" element={<BookDemo />} />
          <Route path="/views" element={<Views />} />
          <Route path="/loginRegister" element={<LoginRegister />} />
          <Route path="/Button" element={<Button />} />
          <Route path="/dashlink" element={<Dash />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
