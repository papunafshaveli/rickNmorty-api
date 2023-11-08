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
      <button onClick={handleClick("CharactersList")}>Characters</button>
      <button onClick={handleClick("Search")}>Search</button>
    </HomeDiv>
  );
}

const HomeDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    padding: 20px 60px;
  }
`;
