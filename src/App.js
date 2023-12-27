import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";
import Category from "./pages/Category";
import Cart from "./pages/Cart";

function App() {

  const location = useLocation();
  const cuurRoute = location.pathname;
  return (
    <div className="App">
      {
        cuurRoute === "/" || cuurRoute === '/signup' ? <></> : <Header/>
      }
      
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="SingleProduct/:id" element={<SingleProduct />} />
        <Route path="Category/:id" element={<Category />} />
        <Route path='cart' element={<Cart/>}/>
      </Routes>
{
        cuurRoute === "/" || cuurRoute === '/signup' ? <></> : <Footer/>

}
      
    </div>
  );
}

export default App;
