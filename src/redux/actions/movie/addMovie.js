const addMovie = (title, genres) => {
  if (title && genres) {
    let movie = {
      title: title,
      genres: formatGenres(genres),
      watched: false
    };

    return {
      type: "ADD_MOVIE",
      payload: movie
    };
  } else {
    return {
      type: ""
    };
  }
};

export default addMovie;

const formatGenres = genres => {
  let arr = genres.split(" ");
  arr = arr.map(item => item.toLowerCase());
  return [...new Set(arr)];
};
