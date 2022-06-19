// Code Keypad Component Here
import React from "react";

function Keypad() {
    function handleSubmit(event) {
      event.preventDefault();
      
    }
    function handleChange(){
        console.log("Entering password...");
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="password" name="password" onChange={handleChange} placeholder="Enter password..." />
      </form>
    );
  }

  export default Keypad;
  
  