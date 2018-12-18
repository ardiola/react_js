import React from "react";


const Top = () => {

    const handlePesan = (value, e) => {
        e.preventDefault();
        alert("ini halaman top!!");
        alert(value)
    }

    return (
        <a href="/" onClick={(e) =>handlePesan("Pesan Dari Top", e)} >Halaman Top</a>
    );
}


export default Top;

//const handlePesan = () => penulisan fucntion
// bisa juga function