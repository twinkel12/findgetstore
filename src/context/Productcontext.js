import { createContext, useContext, useEffect, useReducer } from "react";
// import axios from "axios";
import productsData from "../data/productsData";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

// const API = "https://api.pujakaitem.com/api/products";


const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleProducts:false,
  singleProduct:{}
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts =  () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const products = productsData;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
//2nd APIcall for SingleProduct

  const getSingleProduct = (id) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const product = productsData.find ((product) => product.id === id);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: product });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  }; 

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state,getSingleProduct }}>{children}</AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };