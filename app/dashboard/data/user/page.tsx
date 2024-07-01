import React from "react";
import { Button } from "@/components/ui/button";
import { kolomUser, User } from "./kolom-user";
import { DataTable } from "@/components/ui/data-table";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FormTambahUser from "./form-tambah-user";

async function getData(): Promise<User[]> {
  return [
    {
      nama: "Rizky Firman Syah",
      email: "rizfirsy@gmail.com",
      username: "rizfirsy",
      level: "Administrator",
    },
  ];
}

const UserScreen = async () => {
  const data = await getData();
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Data User</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Tambah data</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="mb-8">
              <SheetTitle>Tambahkan User Baru</SheetTitle>
            </SheetHeader>
            <FormTambahUser />
          </SheetContent>
        </Sheet>
      </div>
      <div className="mx-4 my-8">
        <DataTable
          columns={kolomUser}
          data={data}
          columnName="nama_kriteria"
          filterPlaceholder="Cari User..."
        />
      </div>
    </section>
  );
};

export default UserScreen;
