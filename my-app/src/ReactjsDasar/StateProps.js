//lebih baik dibuat dengan rcc
import React, { Component } from 'react';
import Operan from './Operan';

//hanya class component yang dapat melakukan lifecycle
export default class StateProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan : 'Bakso'
    }
  }
  
  // render() {
  //   return <div>
  //     <h2>{this.state.makanan}</h2>
  //     <button onClick={() => this.setState({makanan: "Soto"})}>Ganti makanan</button>
  //   </div>;
  // }

  //bisa juga diganti dengan
  gantiMakanan = (makanan_baru) => {
    this.setState({
      makanan : makanan_baru
    })
  }

  render() {
    return <div>
      <h2>{this.state.makanan}</h2>
      <button onClick={() => this.gantiMakanan("Soto")}>Ganti makanan</button>
      <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
    </div>;
  }


}

//kapan state ini menjadi props
//ketika dioper dikomponen lain. Masuk ke new file operan.js
