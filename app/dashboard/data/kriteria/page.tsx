import React from "react";
import { Button } from "@/components/ui/button";
import { kriteria, Kriteria } from "./data/column";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<Kriteria[]> {
  return [
    {
      kode_kriteria: "C1",
      nama_kriteria: "Kapasitas Pengguna",
      bobot: "-",
      jenis: "Benefit",
      tingkat_prioritas: 1,
    },
    {
      kode_kriteria: "C2",
      nama_kriteria: "Interaksi Visual",
      bobot: "-",
      jenis: "Benefit",
      tingkat_prioritas: 2,
    },
    {
      kode_kriteria: "C2",
      nama_kriteria: "Interaksi Visual",
      bobot: "-",
      jenis: "Benefit",
      tingkat_prioritas: 3,
    },
    {
      kode_kriteria: "C2",
      nama_kriteria: "Interaksi Visual",
      bobot: "-",
      jenis: "Benefit",
      tingkat_prioritas: 4,
    },
    {
      kode_kriteria: "C2",
      nama_kriteria: "Interaksi Visual",
      bobot: "-",
      jenis: "Benefit",
      tingkat_prioritas: 4,
    },
    {
      kode_kriteria: "C2",
      nama_kriteria: "Interaksi Visual",
      bobot: "-",
      jenis: "Benefit",
      tingkat_prioritas: 3,
    },
  ];
}

const KriteriaScreen = async () => {
  const data = await getData();
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Data Kriteria</h1>
        <Button>Tambah data</Button>
      </div>
      <div className="mx-4 my-8">
        <DataTable columns={kriteria} data={data} />
      </div>
    </div>
  );
};

export default KriteriaScreen;
