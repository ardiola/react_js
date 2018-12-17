import React from "react";


const Top = () => {

    function handlePesan() {
        alert("ini halaman top!!");
    }

    return (
        <a href="/" onClick={handlePesan} >Halaman Top</a>
    );
}


export default Top;