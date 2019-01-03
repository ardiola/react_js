import React, { Component } from 'react';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            daftar: "daftar makanan nusantara",
            daftarList: this.props.list,
            statusRender: true
        }
        this.handlePesan = this.handlePesan.bind(this); //untuk memanggil state apabila pake ini
        this.handleElement = this.handleElement.bind(this);
    }

    handlePesan(value, e) {
        e.preventDefault(); // agar tidak reload page nya
        alert(this.state.daftar);
        alert(value);
    }

    componentDidMount(){ //fungsi yg akan berjalan otomatis setelah render() dijalankan
        console.log("Jalan : OOOOOOOOOOOOOOOOOO")
    }

    handleElement(){
        this.setState((state, props) => {
            return {
                statusRender : !state.statusRender
            }
        });
    }

    render() {
        return(
            <div>
                {this.state.statusRender === true ? (
                    <div>
                        <h1>Selamat Datang</h1>
                        <h2>Silahkan pilih menu</h2>
                    </div>
                ) : (
                    <div>
                        <h1>Selamat Tinggal</h1>
                        <h2>Silahkan checkout</h2>
                    </div>
                )
                }

                <button onClick={this.handleElement}>rubah header</button>
            </div>

        );
        // return(
        //     <div>
        //         <h2>tes render elements</h2>
        //         <p>{this.state.daftar}</p>
        //         <p>{this.state.daftarList}</p>
        //         <a href="/" onClick={(e) => this.handlePesan("Pesan Dari Header", e)}>Halaman Header</a> 
        //     </div>
        // );
    }
}

export default Header;

// () => untuk memanggil function