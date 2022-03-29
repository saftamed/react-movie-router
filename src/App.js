import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Home from "./components/Home";
import Description from "./components/Description";
import {Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState({});
  const handleClose = () => setShow(!show);
  const addHandle = (inputs) => {
    setMovies((m) => m.concat({...inputs,id:uuidv4()}));
    setShow(false);
  };
  const [movies, setMovies] = useState([
    {
      id:uuidv4(),
      title: "kingsman",
      description:
        "Une organisation d'espionnage recrute un adolescent de la rue grossier mais prometteur pour le programme de formation ultra compétitif de l'agence.",
      posterURL: "https://similaires.com/img_fr/movie/thumb/45/4839.jpg",
      rating: 5,
      videoLink:"https://www.youtube.com/embed/hN0JkFrvO_M"
    },
    {
      id:uuidv4(),
      title: "The Matrix",
      description: "Un pirate informatique découvre par de mystérieux rebelles la véritable nature de sa réalité et son rôle dans la guerre contre ceux qui la contrôlent.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      rating: 4,
      videoLink:"https://www.youtube.com/embed/vKQi3bBA1y8"
    },
    {
      id:uuidv4(),
      title: "Joker(2019)",
      description: "Arthur Fleck, un comédien affligé par des troubles mentaux, se voit mis de côté par la société. S'amorce ensuite une descente aux enfers emplie de révoltes .",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      rating: 4,
      videoLink:"https://www.youtube.com/embed/zAGVQLHvwOY"
    },
    {
      id:uuidv4(),
      title: "The Godfather",
      description: "Le patriarche vieillissant d'une dynastie de la mafia New Yorkaise passe le flambeau de son empire clandestin à son fils réticent.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 3,
      videoLink:"https://www.youtube.com/embed/UaVTIH8mujA"
    },
  ]);
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">MyMovies</div>
          <div className="cc">
            <Search onSearch={(s) => setSearch(s)} />
          </div>
        </div>
      </nav>
      <Routes>
          <Route path="/description/:id" element={<Description movies={movies} />} />
          <Route path="/" element={ <Home addHandle={addHandle} handleClose={handleClose} movies={movies} show={show} search={search}   />} />
      </Routes>
     
      
    </div>
  );
}

export default App;
