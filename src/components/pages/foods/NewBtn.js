import React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useRouter } from "next/router";

function NewBtn() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/foods/new")}
      variant="text"
      sx={{
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "100%",
        letterSpacing: "0%",
        color: "#FFFFFF",
        padding: "22px 24px",
        backgroundColor: "#00B074",
        boxShadow: "0px 4px 4px 0px #0000000A",
        borderRadius: "14px",
      }}
    >
      <Image
        style={{
          marginRight: "7px",
        }}
        src={"/newBtn.png"}
        width={24}
        height={24}
        alt="lla"
      />
      New Menu
    </Button>
  );
}

export default NewBtn;
