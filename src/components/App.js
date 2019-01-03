import React, { Component } from 'react';
import Header from './Header';
import Top from './Top';
import Main from './Main';
import Footer from './Footer';
// import List from './List';
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
        <Header list="3 terbaik"/>
        <Top />
        <Main  daftarMakanan = {[
                {
                    nama: "Mie Ayam ++",
                    harga: 10000
                },
                {
                    nama: "Bakso ++",
                    harga: 13000
                },
                {
                    nama: "Mie Ayam Bakso ++",
                    harga: 20000
                },
                {
                    nama: "Soto ++",
                    harga: 10000
                }
            ]} 
          />
        {
        // <List /> comment pada return (kasih curlybracket)
        }
        <Footer name="Makanan Nusantara" tahun="1990"/>
      </div>
    );
  }
}

export default App;
