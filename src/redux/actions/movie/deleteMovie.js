const deleteMovie = id => {
  return {
    type: "DELETE_MOVIE",
    payload: id
  };
};

export default deleteMovie;
