import { useEffect, useState } from "react";
import { MovieCard } from "./movieFav";
import axios from "axios";

export function  DataFetv() {
  const [movies, setMovies] = useState([]);
  const onClickDelete = (id) => {
    window.location.reload(false);
    axios.delete(`http://localhost:5000/deleteMovie/${id}`).then(() => {
      setMovies(movies.filter((movie)=>{
        return movie._id !== id
      }))
    })
    .then((data) => {
      
    })
    // axios.get('http://localhost:5000/movieall').then((response) => {
     
    // })
    // .then((data) => {
    //   console.log(data);
    // })

 }
useEffect(()=>{
  axios.get('http://localhost:5000/movieall').then((response) => {
    const data = response.data;
    setMovies(data)
   
}).catch((err) => console.log(err))
})

 
  const moviesList =movies.map((movie) => (
    <li key={movie.id}>    <img src={movie.thumbanilSrc} />
    
 
    <h1>{movie.name}</h1>
    <button onClick={()=>{onClickDelete(movie._id)}}>Remove</button>
    </li>
  ))
 
  return (<div> <ul>{moviesList}</ul>
  </div>
   
  );
 
 }


