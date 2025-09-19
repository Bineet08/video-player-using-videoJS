import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import VideoJSPlayer from "./components/videojs-player";

function App() {
  const [isBlack, setIsBlack] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const timerRef = useRef(null);

  const toggleBackground = () => {
    setIsBlack((prev) => !prev);
  };

  useEffect(() => {
    const handleMouseMove = () => {
      // Show button when mouse moves
      setShowButton(true);

      // Clear previous timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // Hide after 2s of inactivity
      timerRef.current = setTimeout(() => {
        setShowButton(false);
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: isBlack ? "#000" : "#fff",
        minHeight: "100vh",
        
        minWidth: "100vw",
        transition: "background-color 0.3s ease",
      }}
    >
      {showButton && (
        <button
          onClick={toggleBackground}
          className="toggle-button"
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: isBlack ? "#fff" : "#000",
            color: isBlack ? "#000" : "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            transition: "opacity 0.3s ease",
            zIndex: 1000,
          }}
        >
          Toggle Background
        </button>
      )}

      <VideoJSPlayer isBlack={isBlack} />
    </div>
  );
}

export default App;
