import React, { Component } from "react";
import MovieItem from "./movieitem";
import MyLoader from "./loader";

class MovieList extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="w-full py-12 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            🎬 Search Results
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {
              data && data.length > 0 ? (
                data.map((movie) => (
                  <div
                    key={movie.imdbID}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
                  >
                    <MovieItem {...movie} />
                  </div>
                ))
              ) : (
                <div className="col-span-full">
                  <MyLoader />
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
