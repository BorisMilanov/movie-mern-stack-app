import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from 'react-bootstrap'

import "./FavoriteMovie.css"

export function FavoriteMovie() {
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
  }
  useEffect(() => {
    axios.get('http://localhost:5000/showAllMovies').then((response) => {
      const data = response.data;
      setMovies(data)

    }).catch((err) => console.log(err))
  })

  const renderMovies = ((movie, index) => (
    <Card style={{ width: '18rem' }} key={index} className="box">
      <Card.Img variant="top" src={movie.thumbanilSrc} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>Rating: {movie.rating}</Card.Text>
        <Button variant="danger" onClick={() => { onClickDelete(movie._id) }}>Delete</Button>
      </Card.Body>
    </Card>
  ))

  return (<div className="rowmovie"> {movies.map(renderMovies)}</div>

  );

}


