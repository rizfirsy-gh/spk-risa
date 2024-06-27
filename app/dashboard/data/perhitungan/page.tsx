import React from "react";
import { kolomPerhitungan, Perhitungan } from "./kolom-perhitungan";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<Perhitungan[]> {
  return [];
}

const PerhitunganScreen = async () => {
  const data = await getData();
  return (
    <section>
      <h1 className="text-3xl">Data Perhitungan</h1>
      <div className="mx-4 my-8">tabel tabel disini</div>
    </section>
  );
};

export default PerhitunganScreen;
