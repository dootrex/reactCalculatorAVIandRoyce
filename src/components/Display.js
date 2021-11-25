import React from "react";
import "../styles/Display.css"

export default function Display({ result }) {
  return (
    <div className="display"
      style={{
        width: "600px",
        border: "1px solid black",
        textAlign: "right",
        fontSize: "24px",
      }}
    >
      {result}
    </div>
  );
}
