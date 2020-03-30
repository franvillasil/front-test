const editMovie = (movie, index) => {
  return {
    type: "EDIT_MOVIE",
    payload: { movie: movie, index: index }
  };
};

export default editMovie;
