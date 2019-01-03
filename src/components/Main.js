import React, { Component } from 'react';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            tittle: "Menu Makanan",
            tittle2: "Menu Minuman",
            nameValue: "",
            kotaValue: "",
            daftarMakanan: [
                {
                    nama: "Mie Ayam",
                    harga: 10000
                },
                {
                    nama: "Bakso",
                    harga: 13000
                },
                {
                    nama: "Mie Ayam Bakso",
                    harga: 20000
                },
                {
                    nama: "Soto",
                    harga: 10000
                }
            ]
        }
        this.rubahData = this.rubahData.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    // rubahData(){
    //     this.setState({ tittle: "Pilih Makanan" });
    // }

    rubahData(){
        this.setState((state, props) => {
            return{
                tittle: state.tittle2,
                tittle2: state.tittle
            }
        });
    }

    handleOnChange(value, e){
        // console.log(e.target.value);
        // this.setState({ defaultValue: e.target.value});

        const eventValue = e.target.value;
        this.setState((state, props) => {
            return {
                [value] : eventValue
            };
        });
    }

    render(){
        return(
            <div>
                <h3>{this.state.tittle}</h3>
                <h2>{this.state.tittle2}</h2>
                <button onClick={this.rubahData}>Rubah Data</button>
                <br></br>
                <br></br>
                <input type="text" value={this.state.nameValue} onChange={e => this.handleOnChange("nameValue",e)} placeholder="Name"></input>
                <br />
                <input type="text" value={this.state.kotaValue} onChange={e => this.handleOnChange("kotaValue",e)} placeholder="Kota"></input>

                {this.state.daftarMakanan.map((value, index) => { //ambil data dari state
                    return(
                        <div key={index}>
                            <p>No : {index + 1}</p>
                            <p>Nama Makanan : {value.nama}</p>
                            <p>Harga Makanan : {value.harga}</p>
                        </div>
                    )
                })}

                {this.props.daftarMakanan.map((value, index) => { //ambil data dari props
                    return(
                        <div key={index}>
                            <p>No : {index + 1}</p>
                            <p>Nama Makanan : {value.nama}</p>
                            <p>Harga Makanan : {value.harga}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default Main;