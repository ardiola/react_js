import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            daftar: "daftar makanan nusantara",
            daftarList: this.props.list
        }
    }
    render() {
        return(
            <div>
                <h2>tes render elements</h2>
                <p>{this.state.daftar}</p>
                <p>{this.state.daftarList}</p>
            </div>
        );
    }
}

export default Header;