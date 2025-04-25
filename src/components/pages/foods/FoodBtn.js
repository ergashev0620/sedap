import React from "react";
import { CiGrid41, CiServer } from "react-icons/ci";
import Button from "@mui/material/Button";

export default function FoodBtn({ selected, onSelect }) {
  const handleClick = (value) => {
    onSelect(value); // Update the selected button
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <Button
        onClick={() => handleClick("left")}
        style={{
          padding: "22px",
          backgroundColor: "white",
          borderRadius: "14px",
          boxShadow: "0px 4px 4px 0px #0000000A",
          border: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.3s ease",
          ...(selected === "left" && { backgroundColor: "#f0f0f0" }),
        }}
      >
        <CiGrid41
          style={{
            fontSize: "25px",
            color: selected === "left" ? "#00B074" : "black",
          }}
        />
      </Button>

      <Button
        onClick={() => handleClick("right")}
        style={{
          padding: "22px",
          backgroundColor: "white",
          borderRadius: "14px",
          boxShadow: "0px 4px 4px 0px #0000000A",
          border: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.3s ease",
          ...(selected === "right" && { backgroundColor: "#f0f0f0" }),
        }}
      >
        <CiServer
          style={{
            fontSize: "25px",
            color: selected === "right" ? "#00B074" : "black",
          }}
        />
      </Button>
    </div>
  );
}