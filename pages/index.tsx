import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { NextPage } from "next";

const Body = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: #0f0d16;
`;

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Body>Hello World</Body>
  </div>
);

export default Home;
