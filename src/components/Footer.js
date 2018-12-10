import React from "react";


// const Footer = () => {
//     var name = "NIOMIC";
//     return (
//         <div>
//             <div>
//                 <h4>Halaman Footer {name}</h4>
//                 <p>@2018</p>
//             </div>
//         </div>
//     );
// }

//props
const Footer = props => {
    return (
        <div>
            <div>
                <h4>Halaman Footer {props.name}</h4>
                <p>@{props.tahun}</p>
            </div>
        </div>
    );
}
//end props

export default Footer;