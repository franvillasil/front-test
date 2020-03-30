const editFilter = filter => {
  return {
    type: "EDIT_FILTER",
    payload: filter
  };
};

export default editFilter;
