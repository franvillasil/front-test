import React from "react";
import "./App.css";
import List from "./components/list/list";
import Filters from "./components/filters/filters";
import Form from "./components/form/form";
import Search from "./components/search/search";
import { connect } from "react-redux";
import Loading from "./components/loading/loading";

const App = props => {
  const rendering = load => {
    if (load) return <Loading />;
    else return <List movieList={props.movieList} filter={props.filter} />;
  };

  return (
    <>
      <Form />
      <Filters />
      <Search />

      {rendering(props.loading)}
    </>
  );
};

function mapStateToProps(state) {
  return {
    movieList: state.movies,
    filter: state.filters,
    loading: state.loading
  };
}

export default connect(mapStateToProps)(App);
