import {Link,Routes,Route} from "react-router-dom";

import {ProductListing} from "./pages";
import { Cart } from "./pages";

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>meta store</h1>

      <nav>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductListing/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
