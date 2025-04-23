import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Variants() {
  return (
    <Stack
      spacing={1}
      sx={{
        minHeight: "433px",
        maxHeight: "433px",
        maxWidth: "276px",
        minWidth: "276px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Skeleton
        variant="circular"
        sx={{
          maxWidth: "276px",
          minWidth: "276px",
          maxHeight: "360px",
          minHeight: "360px",
          backgroundColor: "white",
          bottom: "16px",
          borderRadius: "14px",
          position: "absolute",
        }}
      ></Skeleton>
      <Skeleton
        variant="circular"
        sx={{
          maxWidth: "194px",
          maxHeight: "194px",
          fontSize: "11rem",
          width: "100%",
        }}
      />
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton
        variant="text"
        width={200}
        height={80}
        sx={{
          marginTop: "20px !important",
        }}
      />
      <Skeleton
        variant="text"
        width={71}
        height={25}
        sx={{
          marginTop: "-7px !important",
          marginBottom: "7px !important",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Skeleton
            variant="rounded"
            width={35}
            height={35}
            sx={{ borderRadius: "12px" }}
          />
          <Skeleton
            variant="text"
            width={25}
            height={12}
            sx={{ marginTop: "10px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Skeleton
            variant="rounded"
            width={35}
            height={35}
            sx={{ borderRadius: "12px" }}
          />
          <Skeleton
            variant="text"
            width={25}
            height={12}
            sx={{ marginTop: "10px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Skeleton
            variant="rounded"
            width={35}
            height={35}
            sx={{ borderRadius: "12px" }}
          />
          <Skeleton
            variant="text"
            width={25}
            height={12}
            sx={{ marginTop: "10px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Skeleton
            variant="rounded"
            width={35}
            height={35}
            sx={{ borderRadius: "12px" }}
          />
          <Skeleton
            variant="text"
            width={25}
            height={12}
            sx={{ marginTop: "10px" }}
          />
        </div>
      </div>
    </Stack>
  );
}
