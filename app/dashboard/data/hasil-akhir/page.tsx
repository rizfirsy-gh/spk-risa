import React from "react";
import { kolomHasilAkhir, HasilAkhir } from "./kolom-hasil-akhir";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<HasilAkhir[]> {
  return [
    {
      nama_alternatif: "WhatsApp Group",
      nilai: "3.300",
      rangking: 1,
    },
  ];
}

const HasilAkhirScreen = async () => {
  const data = await getData();
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Data Hasil Akhir</h1>
        <Button>Cetak Data</Button>
      </div>
      <div className="mx-4 my-8">
        <DataTable
          columns={kolomHasilAkhir}
          data={data}
          columnName="nama_alternatif"
          filterPlaceholder="Cari alternatif..."
        />
      </div>
    </section>
  );
};

export default HasilAkhirScreen;
