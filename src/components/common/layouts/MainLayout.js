import React from "react";
import Head from "next/head";
import Navigation from "../Navigation";
import { useRouter } from "next/router";

function MainLayout(props) {
  const router = useRouter()
  return (
    <main
      style={{
        display: 'flex',
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <div style={{display: 'flex', minWidth: '100wh'}}>
        <Navigation/>
        <h1 style={{display: router.asPath === '/' ? 'block' : 'none'}}>Dashboard</h1>
      </div>
      <div>{props.children}</div>
    </main>
  );
}

export default MainLayout;
