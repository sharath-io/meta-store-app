import {Routes,Route} from "react-router-dom";

import {ProductListing, Cart } from "./pages";
import { Navbar } from "./components/Navbar";
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<ProductListing/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
