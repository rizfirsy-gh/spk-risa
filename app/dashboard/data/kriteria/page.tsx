import React from "react";
import { Button } from "@/components/ui/button";
import { kolomKriteria, Kriteria } from "./kolom-kriteria";
import { DataTable } from "@/components/ui/data-table";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FormTambahKriteria from "./form-tambah-kriteria";

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
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Data Kriteria</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Tambah data</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="mb-8">
              <SheetTitle>Tambahkan Kriteria Baru</SheetTitle>
            </SheetHeader>
            <FormTambahKriteria />
          </SheetContent>
        </Sheet>
      </div>
      <div className="mx-4 my-8">
        <DataTable
          columns={kolomKriteria}
          data={data}
          columnName="nama_kriteria"
          filterPlaceholder="Cari Kriteria..."
        />
      </div>
    </section>
  );
};

export default KriteriaScreen;
