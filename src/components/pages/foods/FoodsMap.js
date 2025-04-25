// import React from "react";
// import Box from "@mui/material/Box";
// import CustomBtnFood from "@/components/pages/foods/CustomBtnFood";
// import Variants from "@/components/pages/foods/Skeleton";
// import { useRouter } from "next/router";
// function FoodsMap(props) {
//   const { data, handleDeleteClick } = props;
//   const router = useRouter()
//   const handleEdit = (food) => {
//     router.push({
//       pathname: `/foods/${food.id}/edit`,
//       query: {
//         name: food.name,
//         category: food.category,
//         type: food.type,
//         price: food.price,
//         comment: food.comment,
//       },
//     });
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         flexWrap: "wrap",
//         gap: "20px",
//         minWidth: '800px',
//         maxWidth: '1200px',
//         margin: '0 auto'
//       }}
//     >
//       {data.map((food) => {
//         return (
//           <Box
//             key={food.id}
//             component="section"
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "end",
//               p: 2,
//               maxWidth: "276px",
//               maxHeight: "433px",
//               minHeight: "433px",
//               position: "relative",
//             }}
//           >
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: "0px",
//                 minWidth: "194px",
//                 maxWidth: "194px",
//                 minHeight: "194px",
//                 maxHeight: "194px",
//                 background: "#C4C4C4",
//                 boxShadow: "11px 13px 17px 0px #00000026",
//                 borderRadius: "50%",
//               }}
//             ></Box>
//             <Box
//               sx={{
//                 backgroundColor: "#FFFFFF",
//                 display: "flex",
//                 alignItems: "center",
//                 flexDirection: "column",
//                 maxWidth: "276px",
//                 minWidth: "276px",
//                 maxHeight: "359px",
//                 paddingTop: "172px",
//                 minHeight: "359px",
//                 borderRadius: "14px",
//               }}
//             >
//               <h2
//                 style={{
//                   maxWidth: "174px",
//                   fontFamily: "Barlow",
//                   fontWeight: "700",
//                   fontSize: "18px",
//                   lineHeight: "28px",
//                   textAlign: "center",
//                 }}
//               >
//                 {food.name}
//               </h2>
//               <p
//                 style={{
//                   fontWeight: "400",
//                   fontSize: "14px",
//                   lineHeight: "20px",
//                   color: "#00B074",
//                   marginTop: "7px",
//                 }}
//               >
//                 {food.category} /{" "}
//                 <span
//                   style={{
//                     color: "#5E6C93",
//                   }}
//                 >
//                   {food.type}
//                 </span>
//               </p>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "20px",
//                   marginTop: "22px",
//                 }}
//               >
//                 <CustomBtnFood
//                   back="#00B07426"
//                   img="/foodIcon.png"
//                   text="View"
//                   onClick={() => router.push(`/foods/${food.id}`)}
//                 />
//                 <CustomBtnFood
//                   back="#FF5B5B26"
//                   img="/foodIcon2.png"
//                   text="Edit"
//                   onClick={() => handleEdit(food)}
//                 />
//                 <CustomBtnFood
//                   back="#2D9CDB26"
//                   img="/foodIcon3.png"
//                   text="Delete"
//                   onClick={() => handleDeleteClick(food.id)}
//                 />
//                 <CustomBtnFood
//                   back="#5E6C9326"
//                   img="/foodIcon4.png"
//                   text="Duplicate"
//                 />

//               </div>
//             </Box>
//           </Box>
//         );
//       })}
//     </div>
//   );
// }

// export default FoodsMap;


import React from "react";
import CustomBtnFood from "@/components/pages/foods/CustomBtnFood";
import { useRouter } from "next/router";

function FoodsMap({ selected, data, handleDeleteClick }) {
  const router = useRouter();
  console.log("-=-=-", data);
  const handleEdit = (food) => {
    router.push({
      pathname: `/foods/${food.id}/edit`,
      query: {
        name: food.name,
        category: food.category,
        type: food.type,
        price: food.price,
        discription: food.discription,
        ingredients: food.ingredients,
        nutritionInfo: food.nutritionInfo
      },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        ...(selected === "left" ? { flexWrap: "wrap" } : { flexDirection: "column" }),
        ...(selected === "left" ? { marginTop: "100px" } : { marginTop: "50px" }),
        // gap: "20px",
      }}
    >
      {selected === "left"
        ? data.map((food) => (
          <div
            key={food.id}
            style={{
              maxWidth: "276px",
              maxHeight: "360px",
              width: "360px",
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: "0px 30px 30px 30px",
              borderRadius: "14px",
              marginBottom: "70px",
            }}
          >
            <div
              style={{
                maxWidth: "194px",
                minWidth: "194px",
                maxHeight: "194px",
                minHeight: "194px",
                backgroundColor: "#C4C4C4",
                boxShadow: "11px 13px 17px 0px #00000026",
                borderRadius: "50%",
                marginBottom: "42px",
                marginTop: "-74px",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "28px",
                  textAlign: "center",
                  maxWidth: "194px",
                  color: "#464255",
                  width: "100%",
                  marginBottom: "8px",
                }}
              >
                {food.name}
              </h2>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  textAlign: "center",
                  color: "#00B074",
                  marginBottom: "22px",
                }}
              >
                {food.category} / <span style={{ color: "#5E6C93" }}>{food.type}</span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: "22px",
                  }}
                >
                  <CustomBtnFood
                    back="#00B07426"
                    img="/foodIcon.png"
                    text="View"
                    onClick={() => router.push(`/foods/${food.id}`)}
                  />
                  <CustomBtnFood
                    back="#FF5B5B26"
                    img="/foodIcon2.png"
                    text="Edit"
                    onClick={() => handleEdit(food)}
                  />
                  <CustomBtnFood
                    back="#2D9CDB26"
                    img="/foodIcon3.png"
                    text="Delete"
                    onClick={() => handleDeleteClick(food.id)}
                  />
                  <CustomBtnFood
                    onClick={() => router.push(`/foods/${food.id}/edit`)}
                    back="#5E6C9326"
                    img="/foodIcon4.png"
                    text="Duplicate"
                  />
                </div>
              </p>
            </div>
          </div>
        ))
        : data.map((food) => (
          <div
            key={food.id}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              padding: "25px",
              backgroundColor: "white",
              borderRadius: "14px",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <div
                style={{
                  maxWidth: "350px",
                  minWidth: "350px",
                  maxHeight: "250px",
                  minHeight: "250px",
                  borderRadius: "14px",
                  backgroundColor: "#C4C4C4",
                  boxShadow: "11px 13px 17px 0px #00000026",
                }}
              ></div>
              <div>
                <h1
                  style={{
                    color: "#464255",
                    marginBottom: "10px",
                  }}
                >
                  {food.name}
                </h1>
                <p
                  style={{
                    maxWidth: "450px",
                    width: "100%",
                    marginBottom: "25px",
                  }}
                >
                  {food.comment}
                </p>
                <p
                  style={{
                    maxWidth: "450px",
                    width: "100%",
                    color: "green",
                    fontSize: "22px",
                  }}
                >
                  {food.price} so'm
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <CustomBtnFood
                back="#00B07426"
                img="/foodIcon.png"
                text="View"
                onClick={() => router.push(`/foods/${food.id}`)}
              />
              <CustomBtnFood
                onClick={() => router.push(`/foods/${food.id}/edit`)}
                back="#FF5B5B26"
                img="/foodIcon2.png"
                text="Edit"
              />
              <CustomBtnFood
                onClick={() =>
                  setIsDialogOpen({
                    isOpen: true,
                    food,
                  })
                }
                back="#2D9CDB26"
                img="/foodIcon3.png"
                text="Delete"
              />
              <CustomBtnFood
                onClick={() => router.push(`/foods/${food.id}/edit`)}
                back="#5E6C9326"
                img="/foodIcon4.png"
                text="Duplicate"
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default FoodsMap;