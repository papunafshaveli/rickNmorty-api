/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { gql, useLazyQuery } from "@apollo/client";
import styled from "styled-components";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  const navigate = useNavigate();

  const handleClick = (data) => {
    return () => navigate(data);
  };

  return (
    <SearchDiv>
      <button onClick={handleClick("/")}>back</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          getLocations();
        }}
      >
        Search
      </button>

      {loading && <div>Searching...</div>}
      {error && <div>Searching went wrong!</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li key={character.id}>{character.location.name}</li>;
          })}
        </ul>
      )}
    </SearchDiv>
  );
}

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
