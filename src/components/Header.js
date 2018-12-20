import React, { Component } from 'react';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            daftar: "daftar makanan nusantara",
            daftarList: this.props.list
        }
        this.handlePesan = this.handlePesan.bind(this); //untuk memanggil state apabila pake ini
    }

    handlePesan(value, e) {
        e.preventDefault(); // agar tidak reload page nya
        alert(this.state.daftar);
        alert(value);
    }

    render() {
        return(
            <div>
                <h2>tes render elements</h2>
                <p>{this.state.daftar}</p>
                <p>{this.state.daftarList}</p>
                <a href="/" onClick={(e) => this.handlePesan("Pesan Dari Header", e)}>Halaman Header</a> 
            </div>
        );
    }
}

export default Header;

// () => untuk memanggil function