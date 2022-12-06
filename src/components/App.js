import React, { useState } from "react";
import '../styles/App.css';
const App = () => {
  const [val, setVal] = useState(false);
  //code here
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === "btn1") {
      setVal(!val);
    } else {
      setVal(!val);
    }
  };

  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
        {/* assign value for button 1 */}
        {!val ? "OFF" : "ON"}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {/* assign value for button 2 */}
        {!val ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default App;
