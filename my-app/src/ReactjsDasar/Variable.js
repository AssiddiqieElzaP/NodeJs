import React from 'react';

//conts
// const harga = 3000;


//var
// var harga = 20000;
// if (true){
//     var harga = 30000;
// }
//Hasil akan berubah menjadi "Harga 30000" => global scope


//let
let harga = 20000;
if (true){
    let harga = 30000;
}
//Harga tidak dapat diakses didalam suatu scope
//Disarankan memakai let karna lebih aman dalam pengerjaan
//let lebih ke variable bukan konstanta


const Variable = () => {
  return <div>
      <h2>Harga {harga}</h2>
  </div>;
};
//konsep const maka hasil pada web "harga 3000"
//fungsi conts, variable tidak dapat diubah

export default Variable