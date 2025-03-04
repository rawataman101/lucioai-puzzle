import React, { useState } from "react";
import { ChromePicker } from "react-color";
import "./App.css";

function App() {
  // Initialize the state with a default color
  const [color, setColor] = useState("#ff0000");
  const [showPicker, setShowPicker] = useState(false);

  // Update the color state when the input changes
  const handleInputChange = (event) => {
    setColor(event.target.value);
  };

  // Update the color state when a new color is picked
  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <>
      <h1
        style={{
          marginBottom: "100px",
        }}
      >
        Lucio Color Picker
      </h1>
      <div
        className="App"
        style={{
          padding: "2rem",
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Input field for hex color code */}
        <input
          type="text"
          value={color}
          onChange={handleInputChange}
          placeholder="#hexcode"
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />

        {/* Display the color */}
        <div
          style={{
            marginTop: "1rem",
            width: "200px",
            height: "200px",
            backgroundColor: color,
            border: "1px solid #000",
          }}
        />

        {/* Toggle button for the color picker */}
        <button
          onClick={() => setShowPicker(!showPicker)}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
          }}
        >
          {showPicker ? "Close Color Picker" : "Open Color Picker"}
        </button>

        {/* Render the ChromePicker if showPicker is true */}
        {showPicker && (
          <div style={{ marginTop: "1rem" }}>
            <ChromePicker color={color} onChange={handleColorChange} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
