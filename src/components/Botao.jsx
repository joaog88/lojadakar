import React from "react";
import "./css.css";

export default function Botao({ color, children, onClick }) {
  return (
    <div>
      <div
        className={color == "primary" ? "botao-primary" : "botao"}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
}
