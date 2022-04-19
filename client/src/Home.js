import React from "react";
import { SearchBar } from './components/AppBar'
import { DataFetv } from './components/FavoriteMovie'

import styled from "styled-components";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3em;
`;
function Home() {
    return <div><AppContainer><SearchBar/></AppContainer>
        
        <DataFetv />
    </div>;
}

export default Home