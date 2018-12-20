import React, { Component } from 'react';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            tittle: "Menu Makanan",
            tittle2: "Menu Minuman"
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

    handleOnChange(){
        console.log("Jalan");
    }

    render(){
        return(
            <div>
                <h3>{this.state.tittle}</h3>
                <h2>{this.state.tittle2}</h2>
                <button onClick={this.rubahData}>Rubah Data</button>
                <br></br>
                <br></br>
                <input type="text" onChange={this.handleOnChange}></input>
            </div>
        );
    }
}
export default Main;