import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';
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

//component(function) dalam 1 file
// const Footer = () => {
//   return (
//     <div>
//       <h4>Halaman Footer</h4>
//       <p>loreCulpa anim officia nostrud consequat.</p>
//     </div>
//   );
// }
//end

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <List />
        <Footer name="Makanan Nusantara" tahun="1990"/>
      </div>
    );
  }
}

export default App;
