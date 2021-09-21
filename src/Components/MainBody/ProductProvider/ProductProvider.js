import React, { useState, useEffect, useContext } from "react";
import {ProductContext} from "../ProductContext/ProductContext";
import { app } from "../../../Base";

export const ProductProvider = ({ children }) => {
  const [current, setCurrent] = useState([]);

  const trackLoggedInUser = () => {
    app.auth.onAuthStateChanged((user) => {
      setCurrent(user);
      console.log(user);
    });
  };

  useEffect(() => {
    trackLoggedInUser();
  }, []);

  return (
    <ProductContext.Provider value={{ current }}>
      {children}
    </ProductContext.Provider>
  );
};

// export default ProductProvider;
