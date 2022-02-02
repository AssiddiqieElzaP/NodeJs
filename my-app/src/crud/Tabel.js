import React from "react";
import { Button, Table } from "react-bootstrap";
const Tabel = ({ makanan, editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Makanan</th>
          <th>Deskripsi</th>
          <th>harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {makanan.map((makanan, index) => {
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.deskripsi}</td>
              <td>Rp. {makanan.harga}</td>
              <td>
                <Button className="btn btn-warning mr-5" onClick={() => editData(makanan.id)}>Edit</Button>
                <Button className="btn btn-danger ml-5" onClick={() => hapusData(makanan.id)}>Hapus</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
