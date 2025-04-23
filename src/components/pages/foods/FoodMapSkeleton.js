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
      {foodData.map(() => {
        return <Variants />;
      })}
    </div>
  );
}

export default FoodMapSkeleton;
