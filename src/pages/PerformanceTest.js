import React, { useEffect, useState } from "react";
import api from "../services/api";

const PerformanceTest = () => {
  const [text, setText] = useState("");

  // ❌ Normal code (runs every render)
  console.log("Normal Function Called");

  // ✅ useEffect (runs only once)
  useEffect(() => {
    console.log("useEffect Called");

    api.get("/users").then(() => {
      console.log("API Called Once");
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Performance Test Page</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Typed value: {text}</p>
    </div>
  );
};

export default PerformanceTest;