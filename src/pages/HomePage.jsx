/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function HomePage() {
  const navigate = useNavigate();

  const handleClick = (data) => {
    return () => navigate(data);
  };

  return (
    <HomeDiv>
      <h1>Rick & Morty</h1>
      <Buttons>
        <button onClick={handleClick("CharactersList")}>Characters</button>
        <button onClick={handleClick("Search")}>Search</button>
      </Buttons>
    </HomeDiv>
  );
}

const HomeDiv = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;

  h1 {
    text-align: center;
    font-size: xx-large;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  gap: 3rem;
  button {
    font-size: xx-large;
    padding: 4rem;
    border: none;
    border-radius: 10px;
    background-color: yellow;
    color: black;
    font-weight: 900;
    font-family: fantasy;
  }
`;
