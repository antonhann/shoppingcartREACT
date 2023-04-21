import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Shop from "./componenets/shop";
import Home from "./componenets/home";
import './App.css';
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB335LY3JSIdvTWmmYO82Bc_J7JWRgZGfU",
  authDomain: "shopping-cart-2d276.firebaseapp.com",
  projectId: "shopping-cart-2d276",
  storageBucket: "shopping-cart-2d276.appspot.com",
  messagingSenderId: "928860888462",
  appId: "1:928860888462:web:1a2618749e10e00f20d8df",
  measurementId: "G-FMQRG5HTK5"
};

const app = initializeApp(firebaseConfig);



const App = () => {
  const [items, changeCartCount] = useState(0)
  const [total, changeTotal] = useState(0)
  const [inCart, changeInCart] = useState([])

  async function googleLogin (){
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }
  function signOutUser() {
    // Sign out of Firebase.
    signOut(getAuth());
  }
  
  const incrementCart = (price) => {
    changeTotal((total + price));
    changeCartCount(items + 1);
  }
  const decrementCart = (price) => {
    changeTotal(total - price);
    changeCartCount(items - 1);
  }

  // const inputChangeCart = (id,e) => {
  //   const amount = e.target.value
  //   inCart.forEach((item) =>{
  //     if(item.id == id){
  //       item.amount = amount
  //     }
  //   })

  // }
  const addToCart = (item, amount = 1) => {
    incrementCart(item.price)
    let inIt = false
    inCart.forEach((e) =>{
      if(e.product == item.product){
        e.amount += amount
        inIt = true
        return
      }
    });
    if(!inIt){
      changeInCart(inCart.concat(item))
    }
  }

  const deleteInCart = (item) => {
    decrementCart(item.price)
    // let oneItem = false
    inCart.forEach((e) =>{
      if(e.id === item.id){
        if(e.amount === 1){
          changeInCart(inCart.filter((val) => {
            return  val.id !== item.id;
          }));
        }else{
          e.amount -= 1
        }
      }
    });
  }

  return(
    <BrowserRouter>
      <h1>Total: {total}</h1>
      <h1>Items: {items}</h1>
      {inCart.map((item,index) => {
        return (
          <div key = {index}>
            <h1><span>{item.amount}x </span>{item.product} <span>{item.price}</span></h1>
            <button onClick = {() => deleteInCart(item)}>-</button>
            {/* <input type = 'number' value = {item.amount} onChange = {(e) => inputChangeCart(item.id, e)}></input> */}
            <button onClick = {() => addToCart(item)}>+</button>
          </div>
        )
      })}
        <Routes>
          <Route path= "/" element={<Home googleLogin = {googleLogin}/>}/>
          <Route path= "/shop" element={<Shop signOut = {signOutUser}addInCart = {addToCart} />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
