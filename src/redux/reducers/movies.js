const initialState = [
  {
    id: 0,
    title: "Batman",
    genres: ["comedy", "horror"],
    watched: true
  },
  {
    id: 1,
    title: "Superman",
    genres: ["comedy"],
    watched: false
  },
  {
    id: 2,
    title: "Iron Man",
    genres: ["drama", "comic"],
    watched: false
  },
  {
    id: 3,
    title: "Anastasia",
    genres: ["animation", "romance"],
    watched: true
  },
  {
    id: 4,
    title: "Batman 2",
    genres: ["horror"],
    watched: true
  },
  {
    id: 5,
    title: "Batman 3",
    genres: ["horror"],
    watched: true
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      action.payload.id = state.length;
      return [...state, action.payload];

    case "DELETE_MOVIE":
      return [...state.filter(item => item.id !== action.payload)];

    // case "EDIT_MOVIE":
    //   return [
    //     state.map((item, index) => {
    //       if (index === action.payload.index) return item = action.payload.movie;
    //     })
    //   ];

    case "SEARCH_MOVIES":
      if (action.payload === "") return state;
      else return state.filter(item => item.title.includes(action.payload));

    default:
      return state;
  }
};
