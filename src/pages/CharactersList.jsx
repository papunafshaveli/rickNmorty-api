/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { useCharacters } from "../hooks/useCharacters";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();
  const navigate = useNavigate();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  const handleClick = (data) => {
    return () => navigate(data);
  };
  return (
    // this is styled component div

    <CharactersListDiv>
      <button onClick={handleClick("/")}>back</button>
      {/* here we are maping the data */}
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`} key={character.id}>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </CharactersListDiv>
  );
}

const CharactersListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
