import React from "react";
import Head from "next/head";
import Navigation from "../Navigation";
import { useRouter } from "next/router";

function MainLayout(props) {
  return (
    <main
      style={{
        display: "flex",
      }}
    >
      <div style={{ display: "flex", minWidth: "100wh" }}>
        <Navigation />
      </div>
      <div
        style={{
          width: "100%",
          padding: "47px 50px",
        }}
      >
        {props.children}
      </div>
    </main>
  );
}

export default MainLayout;
