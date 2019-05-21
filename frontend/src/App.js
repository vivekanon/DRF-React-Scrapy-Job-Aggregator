import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: []
    }
    this.loadBooks = this.loadBooks.bind(this)
  }
  componentDidMount() {
    this.loadBooks()
 
  }
  loadBooks() {
    fetch('http://127.0.0.1:8000/book') 
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        books: data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="text-red">Welcome to React</h2>
        </div>
        <p className="App-intro">
          books
        </p>
        {console.log(this.state.book)}
        <ul>
         
          </ul>
      </div>
    );
  }
}

export default App;
