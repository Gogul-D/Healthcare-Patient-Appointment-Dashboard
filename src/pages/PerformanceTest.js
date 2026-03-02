import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./PerformanceTest.css";

const PerformanceTest = () => {
  const [text, setText] = useState("");
  const [apiCount, setApiCount] = useState(0);

  // ❌ Normal function (called every render)
  const fetchPatients = () => {
    console.log("Normal Function Called");

    api.get("/users").then(() => {
      setApiCount((prev) => prev + 1);
    });
  };

  // ❌ BAD: called directly
  //fetchPatients();

  /*
  // ✅ GOOD METHOD (uncomment to test)
  useEffect(() => {
    console.log("useEffect Called");

    api.get("/users").then(() => {
      setApiCount(1);
      console.log("API Called Once");
    });
  }, []);
  */

  return (
    <div className="performance-page">
      <div className="performance-card">
        <h2 className="performance-title">Performance Test Page</h2>
        <p className="performance-subtitle">
          Normal function vs useEffect behavior
        </p>

        <input
          className="performance-input"
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <p>Typed value: {text}</p>

        <div className="counter-box">
          <p>API Call Count</p>
          <div className="counter-number">{apiCount}</div>
        </div>

        <div className="info-box">
          <p>
            ❌ Normal function triggers API on every re-render.
          </p>
          <p>
            ✅ useEffect with empty dependency array runs only once.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTest;