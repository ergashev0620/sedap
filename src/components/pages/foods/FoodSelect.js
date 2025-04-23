import React, { useState } from "react";
import { Select, MenuItem, FormControl } from "@mui/material";
import Image from "next/image";

function FoodSelect(props) {
  const { img, item } = props;
  const options = [
    { value: "option0", label: "", image: img },
    { value: "option1", label: item.name, image: img },
    { value: "option2", label: item.name2, image: img },

    item.name3 ? { value: "option3", label: item.name3, image: img } : "",
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const selectedImage = options.find(
    (opt) => opt.value === selectedOption
  )?.image;

  return (
    <FormControl sx={{ position: "relative" }}>
      <Select
        value={selectedOption}
        onChange={handleChange}
        IconComponent={() => null}
        renderValue={() => null}
        displayEmpty
        MenuProps={{
          disablePortal: true,
          PaperProps: {
            sx: {
              mt: 1,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              minWidth: "120px",
            },
          },
        }}
        sx={{
          width: "68px",
          height: "68px",
          backgroundColor: "#FFFFFF",
          borderRadius: "14px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
          padding: 0,
          "& .MuiSelect-select": {
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

      <div
        style={{
          position: "absolute",
          width: "68px",
          height: "68px",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <Image src={selectedImage} width={24} height={24} alt="Selected" />
      </div>
    </FormControl>
  );
}

export default FoodSelect;
