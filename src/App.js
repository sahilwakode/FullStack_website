// import logo from "./logo.svg";
import "./App.css";
import React,{useEffect}from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from './firebase'
// import {db} from './firebase'
// import Footer from "./Footer";

// import Footer from './components/Footer';
// import Footer from "./Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect } from "react/cjs/react.production.min";
import { useStateValue } from "./StateProvider";

function App() {
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
      auth.onAuthStateChanged(authUser =>{
        console.log('The User is >>>',authUser);
        if(authUser){
          dispatch({
              type: 'SET_USER',
              user:authUser
          })
                  //the user is just logged in... 
        }
        else{
                  // the user is logged out...
                  dispatch({
                    type: 'SET_USER',
                    user:null
                })
        }
      })
  },[])
  return (
    <>
    
    <Router>
    <div className="app"> 

    {/* <Routes>
       
        <Route path="/login" element={<Header/>}/ >

  
       </Routes>     */}
    <Routes>
       
        <Route path="/login" element={<Login/>}/ >

  
       </Routes>    

      <Routes>

        {/* <Route path="/orders">
          <Header />
          <Orders />
        </Route> */}
        {/* <Route path="/login">
          <Login />
        </Route> */}
        {/* <Route path="/checkout">
          <Header />
          <Checkout />
        </Route> */}
        {/* <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements> */}
        {/* </Route> */}
        <Route path="/" element={<Header/>}/ >
          {/* <Header />
          <Home /> */}

          </Routes>

          <Routes>
       
        <Route path="/" element={<Home/>}/ >
  
       </Routes>
          {/* <Routes>
       
        <Route path="/" element={<Footer/>}/>
  
       </Routes> */}
       <Routes>
        <Route path="/checkout" element={<Header/>} />
        

         </Routes> <Routes>
        <Route path="/checkout" element={<Checkout/>} />

      </Routes>
    </div>
  </Router>
     
    </>
  );
  
}
export default App;