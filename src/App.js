import {Routes,Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
    </div>
  );
}

export default App;
