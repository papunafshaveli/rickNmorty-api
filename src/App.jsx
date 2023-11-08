import styled from "styled-components";
import "./App.css";
import CharactersList from "./pages/CharactersList";
import { Route, Routes } from "react-router-dom";
import Character from "./pages/Character";
import Search from "./pages/Search";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <AppDiv>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CharactersList" element={<CharactersList />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
