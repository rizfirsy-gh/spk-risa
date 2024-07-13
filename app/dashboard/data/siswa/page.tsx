"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FormTambahUser from "./form-tambah-user";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Pencil, Trash } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteSiswa, getDataSiswa, updateOrder } from "./action";
import { convertMonth } from "@/app/app-utils/post_data";
import FormUpdateUser from "./form-update-user";
import { DataTable } from "./components/data-table";
import { columnsSiswa } from "./components/columns";
import { SiswaType } from "@/app/app-utils/models";

const SiswaScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addFormIsOpen, setAddFormIsOpen] = useState(false);
  const [updateFormIsOpen, setUpdateFormIsOpen] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [dataSiswa, setDataSiswa] = useState<Array<SiswaType>>([
    {
      nisn: "",
      nama_siswa: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      alamat: "",
      kelas: 0,
      status: "",
      penghasilan_orang_tua: 0,
      tanggungan_orang_tua: 0,
    },
  ]);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    getDataSiswa().then((result) => {
      console.log("result", result);
      setIsLoading(false);
      if (!ignore && result.status === 200) {
        setDataSiswa(result.data);
      } else {
        setDataSiswa([]);
      }
    });

    return () => {
      ignore = true;
    };
  }, [refetch]);

  return (
    <section>
      <div className="flex w-full h-full justify-between items-center">
        <h1 className="text-3xl">Data Siswa</h1>
        <Sheet open={addFormIsOpen} onOpenChange={setAddFormIsOpen}>
          <SheetTrigger asChild>
            <Button>Tambah data</Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-scroll">
            <SheetHeader className="mb-8">
              <SheetTitle>Tambahkan Data Baru</SheetTitle>
            </SheetHeader>
            <FormTambahUser
              onPostFinished={(value: boolean) => {
                setRefetch((value) => !value);
                setAddFormIsOpen(value);
              }}
            />
          </SheetContent>
        </Sheet>
      </div>
      <div className="mx-4 my-8">
        <DataTable columns={columnsSiswa} data={dataSiswa} />
      </div>
    </section>
  );
};

export default SiswaScreen;
