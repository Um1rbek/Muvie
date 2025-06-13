import React, { Component } from "react";

class MovieItem extends Component {
  render() {
    const { Poster, Title, Year } = this.props;

    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 hover:shadow-lg transition duration-300">
        <img
          src={Poster}
          alt={Title}
          className="w-full h-72 object-cover"
        />

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{Title}</h3>
          <p className="text-sm text-gray-500 mt-1">{Year}</p>
        </div>
      </div>
    );
  }
}

export default MovieItem;
