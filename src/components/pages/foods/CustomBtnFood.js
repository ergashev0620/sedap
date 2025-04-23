import React from "react";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";

function CustomBtnFood(props) {
  const { back, img, text, onClick } = props;
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <IconButton
      onClick={onClick}
        color="primary"
        style={{
          padding: "6px",
          borderRadius: "12px",
          backgroundColor: back,
          border: "none",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        <Image src={img} width={24} height={24} alt="gg" />
      </IconButton>
      <label
        style={{
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "#5E6C93",
          userSelect: "none",
        }}
      >
        {text}
      </label>
    </div>
  );
}

export default CustomBtnFood;
