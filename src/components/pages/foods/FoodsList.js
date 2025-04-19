import PageTitle from "@/components/common/PageTitle";
import React from "react";
import { foodData } from "@/Data";
import { GoEye } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
export default function FoodsList() {
  return (
    <>
      <PageTitle
        title={"Foods"}
        subtitle={"Here is your menus summary with graph view"}
      />

      <div
        style={{
          maxWidth: "1460px",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          padding: "20px 0",
        }}
      >
        {foodData.map((item) => (
          <div
            key={item.id}
            style={{
              width: "276px",
              height: "340px",
              borderRadius: "14px",
              backgroundColor: "aliceblue",
              position: "relative",
              marginTop: "100px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-50px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "194px",
                height: "194px",
                backgroundColor: "gray",
                borderRadius: "50%",
              }}
            ></div>

            <div
              style={{
                padding: "20px",
                marginTop: "140px",
              }}
            >
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "18px",
                  textAlign: "center",
                  margin: "0 0 8px 0",
                }}
              >
                {item.name}
              </p>
              <p
                style={{
                  color: "#00B074",
                  fontSize: "14px",
                  textAlign: "center",
                  margin: "0 0 20px 0",
                }}
              >
                {item.title} / {item.context}
              </p>
              <Edit />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Edit() {
  const data = [
    { id: "1", icon: <GoEye color="#00B074" />, name: "View" },
    { id: "2", icon: <BiEdit color="#FF5B5B" />, name: "Edit" },
    { id: "3", icon: <RiDeleteBinLine color="#2D9CDB" />, name: "Delete" },
    { id: "4", icon: <FiPlusCircle color="#5E6C93" />, name: "Duplicate" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <button
            style={{
              border: "none",
              borderRadius: "12px",
              backgroundColor: "#00B0741A",
              padding: "8px",
            }}
          >
            {item.icon}
          </button>
          <span
            style={{
              fontSize: "12px",
              color: "#5E6E89",
              fontWeight: "500",
            }}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}
