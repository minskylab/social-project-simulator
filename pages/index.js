import React from "react";
import Head from "next/head";
import styled from "styled-components";

const Body = styled.div`
  background-color: #ff6445;
  color: #0f0d16;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Body>Hello World</Body>
  </div>
);

export default Home;
