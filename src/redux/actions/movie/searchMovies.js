const searchMovies = title => {
  return {
    type: "SEARCH_MOVIES",
    payload: title
  };
};

export default searchMovies;
