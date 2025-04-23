import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Image from "next/image";

function FoodSearch({ onChange }) {
  return (
    <TextField
      variant="outlined"
      placeholder="Search here"
      onChange={(e) => onChange(e.target.value)}
      sx={{
        width: "100%",
        maxWidth: 491,
        minWidth: 491,
        borderRadius: "20px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        padding: "7px 16px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "none",
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Image src="/foodSearch.png" width={28} height={28} alt="img" />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default FoodSearch;
