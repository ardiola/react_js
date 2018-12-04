import React, { Component } from 'react';
import Header from './Header';
// import logo from './logo.svg';
// import './App.css';

//tes banyak class dalam 1 file
// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <h2>tes render elements</h2>
//       </div>
//     );
//   }
// }
//end tes

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>bua jamboo</h1>
      </div>
    );
  }
}

export default App;
