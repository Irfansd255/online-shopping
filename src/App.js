import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="SingleProduct/:id" element={<SingleProduct />} />
        <Route path="Category/:id" element={<Category />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
