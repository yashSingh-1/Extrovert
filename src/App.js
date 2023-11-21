import { Routes, Route } from "react-router";
import NavigationBar from "./Navigation/NavigationBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Category from "./Categories/Category";
import { BrowserRouter } from "react-router-dom";
import AllProducts from "./AllProducts/AllProducts";
import HomePage from "./HomePage/HomePage";
import PercularPro from "./PerticularPro/PercularPro";
import Gallery from "./Gallery/Gallery";
import About from "./AboutUs/About";
import Policies from "./Policies/Policies";
import ContactUs from "./Contact/ContactUs";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="*" element={<HomePage />} />
            <Route path="/allProducts" element={<AllProducts />} />
            <Route path="allProducts/product/:slug" element={<PercularPro />} />
            <Route path="product/:slug" element={<PercularPro />} />
            <Route path="product/:slug" element={<PercularPro />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/aboutUs" element={<About />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/contactUs" element={<ContactUs />} />




            
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
