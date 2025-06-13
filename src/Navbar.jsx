import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };


    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInput(e) {
    this.setState({ name: e.target.value });
  }

  handleSearch() {
    const { handleName } = this.props;
    if (this.state.name.trim() !== "") {
      handleName(this.state.name.trim());
    }
  }

  render() {
    return (
      <nav className="bg-gray-900 text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-md">
        <h1 className="text-2xl font-bold">🎬 MovieTime</h1>

        <div className="flex items-center space-x-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search movies..."
            value={this.state.name}
            onChange={this.handleInput}
            className="w-full md:w-64 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={this.handleSearch}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white transition duration-300"
          >
            Search
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
