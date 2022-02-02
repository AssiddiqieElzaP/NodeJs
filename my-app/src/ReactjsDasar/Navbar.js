import React, { Component } from 'react';

// "Class Component" => rcc
// Biasanya digunakan untuk komponen yang besar / menggunakan lifecycle component
// export default class Navbar extends Component {
//   render() {
//     return <div>
//         <h2>Navbar</h2>
//     </div>;
//   }
// }


//"Function Component" => rfc
// Komponen yang jarang digunakan
// export default function Navbar() {
//   return <div>
//       <h2>Navbar</h2>
//   </div>;
// }


//"Arrow Function" => rafc
//Biasanya digunakan saat komponen kecil / tidak memakai lifecycle komponen
const Navbar = () => {
  return <div>
      <h2>Navbar</h2>
  </div>;
};

export default Navbar


//terdapat export dan export default, export default seperti diatas
//Export biasa seperti berikut

// export const Navbar =() => {
//     return (
//         <div>
//             <h2>Navbar</h2>
//         </div>
//     )
// }
// menggunakan import Navbar dengan kurung kurawal