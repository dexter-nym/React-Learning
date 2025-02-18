import { createContext } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const productData = {
    productName: "Desktop",
    price: 2000,
  };

  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
