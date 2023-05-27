import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MovieList from "../MovieList";

export class MoviesPage extends Component {
  static propTypes = {
    movieReducer: PropTypes.object.isRequired,
  };

  render() {
    //console.log(this.props);
    return (
      <div>
        Movies Page
        <MovieList movies={this.props.movieReducer} />
      </div>
    );
  }
}

const mapStateToProps = ({ movieReducer }) => ({
  movieReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
