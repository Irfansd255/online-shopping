import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <Context.Provider
      value={{ products, setProducts, categories, setCategories }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
