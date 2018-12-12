import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            daftar: "daftar makanan nusantara"
        }
    }
    render() {
        return(
            <div>
                <h2>tes render elements</h2>
                <p>{this.state.daftar}</p>
            </div>
        );
    }
}

export default Header;