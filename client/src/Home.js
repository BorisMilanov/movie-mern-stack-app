import React from "react";
import { SearchBar } from './components/AppBar'
import { DataFetv } from './components/FavoriteMovie'
 function Home() {
    return <div><SearchBar/>
    <DataFetv/>
    </div>;
}

export default Home