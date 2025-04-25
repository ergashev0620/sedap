import React from "react";
import { foodData } from "@/Data";
import Variants from "@/components/pages/foods/Skeleton";

function FoodMapSkeleton() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {foodData.map((_, index) => {
        return <Variants key={index}/>;
      })}
    </div>
  );
}

export default FoodMapSkeleton;
