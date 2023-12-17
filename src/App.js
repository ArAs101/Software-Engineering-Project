import React from "react";
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import GiftAwaysResults from "./components/GiftAwaysResults";
import Categories from "./components/categories";
import GALogo from "./GiftAwayLogo.png"
import ClaimedGiftAwaysList from "./ClaimedGiftAways";

ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
      <div id="index">

        <div id="GALogo">
          <img src={GALogo} id="GA_Logo"/>
        </div>
        <div className="TopRight">
          <p id="Settings&LogOut">You are logged in as (Username).</p>
        </div>

        <div id="Categories">
          <Categories/>
        </div>

        <div id="ResultsList">
          <GiftAwaysResults/>
        </div>
        <div id="ClaimedList">
          <ClaimedGiftAwaysList/>
        </div>

        <div className="footer">
          <p>Copyright 2023 GiftAway.</p>
        </div>
      </div>
  )
}


export default App;
