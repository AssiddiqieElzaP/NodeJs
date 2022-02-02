//rcc
import React, { Component } from 'react';

export default class Operan extends Component {
    // gantiMakanan(makanan_baru){
    //     this.setState({
    //       makanan : makanan_baru
    //     })
    //   }
    
    
  render() {
    return <div>
        <h2>Operan state yang menjadi props : {this.props.makanan}</h2>
        <button onClick={() => this.props.gantiMakanan("Soto")}>Ganti makanan</button>
    </div>;
  }
}

//bakso pada website (setelah : operan) sudah bersifat props