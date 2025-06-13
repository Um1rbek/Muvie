import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import MovieList from './MovieList';
import Footer from './Footer';

import 'react-loading-skeleton/dist/skeleton.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    // `this` ni bog'lab qo'yish kerak
    this.handleName = this.handleName.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://www.omdbapi.com/?apikey=c65fcde9&s=ip man")
      .then((response) => {
        if (response?.data?.Search?.length) {
          this.setState({ data: response.data.Search });
        }
      })

  }

  handleName(name) {
    axios
      .get(`https://www.omdbapi.com/?apikey=c65fcde9&s=${name}`)
      .then((response) => {
        this.setState({ data: response?.data?.Search || [] });
      })

  }

  render() {
    return (
      <div>
        <Navbar handleName={this.handleName} />
        <MovieList data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
