import React, { Component } from "react";
import Formulir from "./Formulir";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        makanan: [
          ...this.state.makanan,
          {
            id: this.state.makanan.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const makananYangTidakDiPilih = this.state.makanan
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });

        this.setState({
            makanan: [
              ...makananYangTidakDiPilih,
              {
                id: this.state.makanan.length + 1,
                nama: this.state.nama,
                deskripsi: this.state.deskripsi,
                harga: this.state.harga,
              },
            ],
          });
    }

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };


  //EDIT DATA
  editData = (id) => {
    const makananYangDiPilih = this.state.makanan
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => {
        return filterMakanan;
      });

    this.setState({
      nama: makananYangDiPilih[0].nama,
      deskripsi: makananYangDiPilih[0].deskripsi,
      harga: makananYangDiPilih[0].harga,
      id: makananYangDiPilih[0].id,
    });
  };

//HAPUS DATA
  hapusData = (id) => {
    const makananBaru = this.state.makanan
    .filter((makanan) => makanan.id !== id)
    .map((filterMakanan) => {
      return filterMakanan;
    });

    this.setState({
        makanan: makananBaru
    })
  }


  render() {
    //   console.log(this.state.makanan);
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Tabel makanan={this.state.makanan} editData={this.editData} hapusData={this.hapusData}/>
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
