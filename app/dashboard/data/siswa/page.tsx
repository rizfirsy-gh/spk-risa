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

const SiswaScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addFormIsOpen, setAddFormIsOpen] = useState(false);
  const [updateFormIsOpen, setUpdateFormIsOpen] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [dataSiswa, setDataSiswa] = useState<Array<UserType>>([
    {
      nisn: 0,
      password: "",
      nama_siswa: "",
      tempat_lahir: "",
      tanggal_lahir: new Date(),
      alamat: "",
      kelas: 0,
      status: "",
      penghasilan_orang_tua: 0,
      tanggungan_orang_tua: 0,
    },
  ]);
  const { toast } = useToast();

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
        <Card className="mx-4 my-8">
          <CardContent>
            <Table>
              <TableCaption>
                <TableCaption className="w-full">
                  {dataSiswa && dataSiswa.length === 0
                    ? "Data kriteria kosong"
                    : ""}
                </TableCaption>
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">NISN</TableHead>
                  <TableHead className="w-full">Nama</TableHead>
                  <TableHead className="w-full">Kelas</TableHead>
                  <TableHead className="w-full">Status</TableHead>
                  <TableHead className="w-full">Alamat</TableHead>
                  <TableHead className="w-full">Tempat lahir</TableHead>
                  <TableHead className="w-full">Tanggal lahir</TableHead>
                  <TableHead className="w-full">
                    Penghasilan Orang Tua
                  </TableHead>
                  <TableHead className="w-[600px]">
                    Tanggungan Orang Tua
                  </TableHead>
                  <TableHead className="w-[600px]">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      Mendapatkan Data...
                    </TableCell>
                  </TableRow>
                ) : (
                  dataSiswa.map((data, index) => {
                    const date = new Date(data.tanggal_lahir);
                    const month = convertMonth(date.getMonth());
                    const tanggalLahir = `${date.getDay()} ${month} ${date.getFullYear()}`;

                    return (
                      <TableRow key={index}>
                        <TableCell className="font-medium text-center">
                          {data.nisn === null ? "-" : data.nisn}
                        </TableCell>
                        <TableCell>
                          {data.nama_siswa === null ? "-" : data.nama_siswa}
                        </TableCell>
                        <TableCell>
                          {data.kelas === null ? "-" : data.kelas}
                        </TableCell>
                        <TableCell>
                          {data.status === null ? "-" : data.status}
                        </TableCell>
                        <TableCell>
                          {data.alamat === null ? "-" : data.alamat}
                        </TableCell>
                        <TableCell>
                          {data.tempat_lahir === null ? "-" : data.tempat_lahir}
                        </TableCell>
                        <TableCell>
                          {data.tanggal_lahir === null ? "-" : tanggalLahir}
                        </TableCell>
                        <TableCell>
                          {data.penghasilan_orang_tua === null
                            ? "-"
                            : data.penghasilan_orang_tua}
                        </TableCell>
                        <TableCell>
                          {data.tanggungan_orang_tua === null
                            ? "-"
                            : data.tanggungan_orang_tua}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {/* Update Data Kriteria */}
                            <Sheet
                              open={updateFormIsOpen}
                              onOpenChange={setUpdateFormIsOpen}
                            >
                              <SheetTrigger>
                                <Button variant="outline" size="icon">
                                  <Pencil className="h-4 w-4" />
                                </Button>
                              </SheetTrigger>
                              <SheetContent className="w-full overflow-scroll">
                                <SheetHeader>
                                  <SheetTitle>Ubah Data Siswa</SheetTitle>
                                </SheetHeader>
                                <FormUpdateUser
                                  data={data}
                                  onUpdateFinished={(value: boolean) => {
                                    setRefetch((value) => !value);
                                    setUpdateFormIsOpen(value);
                                  }}
                                />
                              </SheetContent>
                            </Sheet>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={async () => {
                                const res = await deleteSiswa(data.nisn);
                                setRefetch((value) => !value);
                                toast({
                                  variant: "destructive",
                                  description: res.message,
                                });
                              }}
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SiswaScreen;
