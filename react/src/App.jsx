import React, { use, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Login from "./Components/AdminPanel/Login";
import Loader from "./Components/Loader/Loader";
import "./App.css";
import { HideLoading, SetPortfolioData, ShowLoading, ReloadData } from "./redux/rootSlice";
import HomeMain from "../HomeMain";
import AdminMain from "./Components/Admin/AdminMain";
import { useAuth } from "../context/authContext";

const App = () => {
  const {loading,portfolioData, reloadData} = useSelector((state) => state.root);
const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get(`https://arpit-assign.onrender.com/api/portfolio/get-portfolio-data`);
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false))
      dispatch(HideLoading());
    } catch (err) {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if(!portfolioData){
      getPortfolioData();
    }
  }, [portfolioData]);

  
 useEffect(() => {
    if(reloadData){
      getPortfolioData();
    }
  }
  , [reloadData]);
  return (
    <Router>
    {loading ? (<Loader />) : (
      <Routes>
        <Route path="/Login" element={!isAuthenticated? <Login />: <Navigate to="/admin"/>} />
        <Route path="/" element={<HomeMain />} />
        <Route path="/Admin" element={isAuthenticated ? <AdminMain />: <Login/>} />
        {/* <Route path="/Admin" element={ <AdminMain />} /> */}
      </Routes>
    )}
  </Router>
  );
};

export default App;
