"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Pencil, RefreshCcw, Trash } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  deleteSiswa,
  getDataSiswa,
  getSiswaByNisn,
  updateOrder,
} from "./action";
import { convertMonth } from "@/app/app-utils/post_data";
import { DataTable } from "./components/data-table";
import { columnsSiswa } from "./components/columns";
import { SiswaType } from "@/app/app-utils/models";
import FormTambahSiswa from "./components/form-tambah-siswa";
import { checkUserRole } from "@/app/app-utils/auth";
import { Separator } from "@/components/ui/separator";
import FormUpdateSiswa from "./components/form-update-siswa";

const SiswaScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addFormIsOpen, setAddFormIsOpen] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [siswa, setSiswa] = useState<SiswaType>({
    nisn: "",
    nama_siswa: "",
    alamat: "",
    kelas: 1,
    penghasilan_orang_tua: 0,
    status: "",
    tanggal_lahir: "",
    tanggungan_orang_tua: 0,
    tempat_lahir: "",
  });
  const [dataSiswa, setDataSiswa] = useState<Array<SiswaType>>([]);
  const role = checkUserRole();

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);

    if (role === "ssw") {
      getSiswaByNisn().then((result) => {
        setIsLoading(false);
        if (!ignore && result.status === 200) {
          setDataSiswa(result.data);
        } else {
          setDataSiswa([]);
        }
      });
    } else {
      getDataSiswa().then((result) => {
        setIsLoading(false);
        if (!ignore && result.status === 200) {
          setDataSiswa(result.data);
        } else {
          setDataSiswa([]);
        }
      });
    }

    return () => {
      ignore = true;
    };
  }, [refetch]);

  if (role === "ssw") {
    return (
      <section>
        <div className="flex w-full h-full justify-between items-center">
          <h1 className="text-3xl">Data Siswa</h1>
          <div className="flex justify-center gap-1">
            <Button
              className="flex gap-2 justify-center"
              variant={"outline"}
              onClick={() => setRefetch(true)}
            >
              <RefreshCcw size={16} />
              <span>Refresh</span>
            </Button>
            <Sheet open={addFormIsOpen} onOpenChange={setAddFormIsOpen}>
              <SheetTrigger asChild>
                <Button>Tambah data</Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-scroll">
                <SheetHeader className="mb-8">
                  <SheetTitle>Tambahkan Data Baru</SheetTitle>
                </SheetHeader>
                <FormUpdateSiswa
                  data={siswa}
                  onUpdateFinished={(value: boolean) => {
                    setRefetch((value) => !value);
                    setAddFormIsOpen(value);
                  }}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <Separator />
        <Card>
          <CardHeader>{siswa?.nama_siswa}</CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>NISN</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    {siswa?.nama_siswa}
                  </TableCell>
                  <TableCell>{siswa?.nisn}</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section>
      <div className="flex w-full h-full justify-between items-center">
        <h1 className="text-3xl">Data Siswa</h1>
        <div className="flex justify-center gap-1">
          <Button
            className="flex gap-2 justify-center"
            variant={"outline"}
            onClick={() => setRefetch(true)}
          >
            <RefreshCcw size={16} />
            <span>Refresh</span>
          </Button>
          {role === "adm" && (
            <Sheet open={addFormIsOpen} onOpenChange={setAddFormIsOpen}>
              <SheetTrigger asChild>
                <Button>Tambah data</Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-scroll">
                <SheetHeader className="mb-8">
                  <SheetTitle>Tambahkan Data Baru</SheetTitle>
                </SheetHeader>
                <FormTambahSiswa
                  onPostFinished={(value: boolean) => {
                    setRefetch((value) => !value);
                    setAddFormIsOpen(value);
                  }}
                />
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
      <div className="mx-4 my-8">
        {isLoading ? (
          <p>Mengambil data...</p>
        ) : (
          <DataTable columns={columnsSiswa} data={dataSiswa} />
        )}
      </div>
    </section>
  );
};

export default SiswaScreen;
