import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <Route exact path="/" component={MovieList} />
      <Route exact path="/movies/:id" component={Movie} />
      <SavedList list={savedList} />
    </div>
  );
};

export default App;
