import React, {  useContext, useReducer, useEffect } from "react";
import reducer from "./reducer"

const AppContext = React.createContext();

const API = "https://65e3074788c4088649f53321.mockapi.io/ReactPortfolio"

const initialState = {
  name: "",
  image: "",
  about: "As an aspiring computer science student, I am passionate about harnessing the power of technology to create innovative solutions and drive positive change. Committed to non-stop studying, I'm curious about coding and learning new technologies..",
  resume: "https://drive.google.com/file/d/1o3c9L9aBpOGuCOoxN27jTRscG4k0wJfX/view",
  services: []
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE", 
      payload: {
        name: "Devendra Parmar",
        image: "/Images/dev-ed-wave.png", 
        about: "",
        resume: "",
      },
    });
  }
  
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE", 
      payload: {
        name: "Devendra Parmar",
        image: "/Images/about-us.png", 
        about: "",
      },
    });
  }

  //? To get the api data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({type: "GET_SERVICES", payload: data});
    } catch (error) {
      console.log(error)
    }
  }

  //? To call the API
  useEffect(() =>{
    getServices(API);
  }, [])

  return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>{children}</AppContext.Provider>
};

// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
