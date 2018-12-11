import React, { Component } from 'react';


class Image extends Component {
    render() {
        return (
            <img src={this.props.linkgambar} width={this.props.lebar} alt="gambar ae"></img>
        );
    }
}


export default Image;