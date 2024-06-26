import React from "react";
import { Button } from "@/components/ui/button";
import { kolomAlternatif, Alternatif } from "./kolom-alternatif";
import { DataTable } from "@/components/ui/data-table";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FormTambahAlternatif from "./form-tambah-alternatif";

async function getData(): Promise<Alternatif[]> {
  return [
    {
      nama_alternatif: "WhatsApp Group",
    },
  ];
}

const AlternatifScreen = async () => {
  const data = await getData();
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Data Alternatif</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Tambah data</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="mb-8">
              <SheetTitle>Tambahkan Alternatif Baru</SheetTitle>
            </SheetHeader>
            <FormTambahAlternatif />
          </SheetContent>
        </Sheet>
      </div>
      <div className="mx-4 my-8">
        <DataTable
          columns={kolomAlternatif}
          data={data}
          columnName="nama_alternatif"
          filterPlaceholder="Cari Alternatif..."
        />
      </div>
    </section>
  );
};

export default AlternatifScreen;
