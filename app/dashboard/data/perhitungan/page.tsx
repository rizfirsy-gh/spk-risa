import React from "react";
import {
  kolomMatrixKeputusan,
  MatrixKeputusan,
} from "./kolom-matrix-keputusan";
import CardDataPerhitungan from "./components/CardDataPerhitungan";

const getDataMatrixKeputusan = [
  {
    no: "1",
    namaAlternatif: "WhatsAppGroup",
    c1: 250,
    c2: 50,
  },
  {
    no: "1",
    namaAlternatif: "WhatsAppGroup",
    c1: 250,
    c2: 50,
  },
  {
    no: "1",
    namaAlternatif: "WhatsAppGroup",
    c1: 250,
    c2: 50,
  },
  {
    no: "1",
    namaAlternatif: "WhatsAppGroup",
    c1: 250,
    c2: 50,
  },
  {
    no: "1",
    namaAlternatif: "WhatsAppGroup",
    c1: 250,
    c2: 50,
  },
  {
    no: "1",
    namaAlternatif: "WhatsAppGroup",
    c1: 250,
    c2: 50,
  },
];

const PerhitunganScreen = async () => {
  return (
    <section>
      <h1 className="text-3xl">Data Perhitungan</h1>
      <CardDataPerhitungan />
    </section>
  );
};

export default PerhitunganScreen;
