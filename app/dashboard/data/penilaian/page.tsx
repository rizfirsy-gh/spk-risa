import React from "react";
import { kolomPenilaian, Penilaian } from "./kolom-penilaian";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<Penilaian[]> {
  return [
    {
      nama_alternatif: "WhatsApp Group",
    },
  ];
}

const PenilaianScreen = async () => {
  const data = await getData();
  return (
    <section>
      <h1 className="text-3xl">Data Penilaian</h1>
      <div className="mx-4 my-8">
        <DataTable
          columns={kolomPenilaian}
          data={data}
          columnName="nama_alternatif"
          filterPlaceholder="Cari Alternatif..."
        />
      </div>
    </section>
  );
};

export default PenilaianScreen;
