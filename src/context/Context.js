import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubToatal] = useState(0);

  useEffect(
    () => {
      let subTotal = 0;
      cartItems.map(
        item => (subTotal += item.attributes.price * item.attributes.quantity)
      );
      setCartSubToatal(subTotal);

      let count = 0;
      cartItems.map(item => (count += item.attributes.quantity));
      setCartCount(count);
    },
    [cartItems]
  );

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex(p => p.id === product.id);

    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }

    setCartItems(items);
  };

  console.log(cartItems);
  const handleRemoveFromCart = product => {
    let items = [...cartItems];
    items = items.filter(p => p.id !== product.id);

    setCartItems(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex(p => p.id === product.id);

    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubToatal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
