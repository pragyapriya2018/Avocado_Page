import React from "react";
import "./styles.css";
import "./App.css";

export default function App() {
  return (

    <div className="avocado">
      <form align="center">
        <h1 className="heading"> Give $10, Get $10</h1>
        <p className="subHeading">
          For every friend who places their first order
        </p>

        <p className="thick"> Share your link</p>

        <div className="searchBar">
          <input
            type="URL"
            className="searchInput"
            placeholder="Code:  GAGENCY1291F92"
          ></input>
          <button onClick="myFunction()" className="searchButton">
            <i class="far fa-copy"></i>
          </button>
        </div>
        <br></br>
        <div className="searchBar2">
          <input
            type="Code"
            className="searchInput2"
            placeholder="https://avocado.shopping/t/T1JuUmY0ckQ2"
          ></input>
          <button
            id="rectangle1"
            onClick="myFunction()"
            className="searchButton2"
          >
            <i class="far fa-copy"></i>
          </button>
        </div>
        <div>
          <button className="facebookButton">
            <b>f</b>&nbsp;&nbsp;&nbsp;&nbsp; Share on Facebook
          </button>
        </div>
        <h3 className="emailSubheading">Send an email invite</h3>
        <div className="searchBar3">
          <input
            type="Text"
            placeholder="Enter a friend’s email"
            className="searchInput3"
          ></input>
        </div>

        <a href="google.com" target="_blank" className="previewButton">
          Preview Email
        </a>

        <button onClick="Send" className="sendButton">
          Send
        </button>
        <br></br>

        <button onClick="Choose Contact" className="contactButton">
          Choose Contact
        </button>
      </form>
    </div>
    
  );
}
