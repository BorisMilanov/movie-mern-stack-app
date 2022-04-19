import { useEffect, useState } from "react";
import axios from "axios";
import {Card, Button } from 'react-bootstrap'

import "./FavoriteMovie.css"

export function DataFetv() {
  const [movies, setMovies] = useState([]);
  const onClickDelete = (id) => {

    window.location.reload(false);
    axios.delete(`http://localhost:5000/deleteMovie/${id}`).then(() => {
      setMovies(movies.filter((movie) => {
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
  useEffect(() => {
    axios.get('http://localhost:5000/movieall').then((response) => {
      const data = response.data;
      setMovies(data)

    }).catch((err) => console.log(err))
  })

const renderMovies =((movie,index) => (
    <Card  style={{ width: '18rem' }} key={index} className="box">
    <Card.Img variant="top" src={movie.thumbanilSrc} />
    <Card.Body>
      <Card.Title>{movie.name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="danger" onClick={()=>{onClickDelete(movie._id)}}>Delete</Button>
    </Card.Body>
  </Card>
    // <li key={movie.id}>    <img src={movie.thumbanilSrc} />


    // <h1>{movie.name}</h1>
    // <button onClick={()=>{onClickDelete(movie._id)}}>Remove</button>
    // </li>
  ))

  return (<div className="rowmovie"> {movies.map(renderMovies)}</div>

  );

}


