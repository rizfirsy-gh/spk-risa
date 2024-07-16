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
import { FileCheck, LogOut, Pencil, RefreshCcw, Trash } from "lucide-react";
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
import { checkUserRole, logout } from "@/app/app-utils/auth";
import { Separator } from "@/components/ui/separator";
import FormUpdateSiswa from "./components/form-update-siswa";
import { useRouter } from "next/navigation";
import { DateTime } from "luxon";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HasilAkhirScreen from "../hasil-akhir/page";

const SiswaScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addFormIsOpen, setAddFormIsOpen] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [siswa, setSiswa] = useState<any>({
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
  const [dataSiswa, setDataSiswa] = useState<Array<SiswaType>>([
    {
      nisn: "",
      nama_siswa: "",
      alamat: "",
      kelas: 1,
      penghasilan_orang_tua: 0,
      status: "",
      tanggal_lahir: "",
      tanggungan_orang_tua: 0,
      tempat_lahir: "",
    },
  ]);
  const role = checkUserRole();
  const route = useRouter();

  const formattedBirthDate = DateTime.fromISO(siswa.tanggal_lahir)
    .setZone("Asia/Jakarta")
    .toFormat("dd-MM-yyyy");

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);

    if (role === "ssw") {
      getSiswaByNisn().then(({ data }) => {
        setIsLoading(false);

        if (!data) {
          setSiswa([]);
        }
        setSiswa(data);
      });
    } else {
      getDataSiswa().then(({ data }) => {
        setIsLoading(false);

        if (!data) {
          setDataSiswa([]);
        }
        setDataSiswa(data);
      });
    }

    return () => {
      ignore = true;
    };
  }, [refetch]);

  if (role === "ssw") {
    return (
      <section>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button
              variant={"outline"}
              className="text-red-600 flex items-center gap-2 fixed right-4 bottom-4"
            >
              <LogOut size={14} className="text-red-600" />
              <span>Keluar</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Batal</AlertDialogCancel>
              <AlertDialogAction
                className="flex gap-2"
                onClick={() => {
                  logout();
                  route.push("/");
                }}
              >
                <LogOut size={14} className="text-zinc-50" />
                <span>Ya, Keluar</span>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <div className="flex w-full h-full justify-between items-center">
          <h1 className="text-3xl">Selamat datang</h1>
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
                <Button>Lengkapi data</Button>
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
        <Separator className="my-8" />
        <Tabs defaultValue="siswa">
          <TabsList>
            <TabsTrigger value="siswa">Data Saya</TabsTrigger>
            <TabsTrigger value="laporan">Hasil Laporan</TabsTrigger>
          </TabsList>
          <TabsContent value="siswa">
            <Card>
              <CardHeader>{siswa?.nama_siswa}</CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nama</TableHead>
                      <TableHead>NISN</TableHead>
                      <TableHead>Tempat Lahir</TableHead>
                      <TableHead>Tanggal Lahir</TableHead>
                      <TableHead>Alamat</TableHead>
                      <TableHead>Kelas</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Penghasilan Orang Tua</TableHead>
                      <TableHead>Tanggungan Orang Tua</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        {siswa?.nama_siswa}
                      </TableCell>
                      <TableCell>{siswa?.nisn}</TableCell>
                      <TableCell>{siswa?.tempat_lahir}</TableCell>
                      <TableCell>{formattedBirthDate}</TableCell>
                      <TableCell>{siswa.alamat ? siswa.alamat : "-"}</TableCell>
                      <TableCell>{siswa.kelas ? siswa.kelas : "-"}</TableCell>
                      <TableCell>{siswa.status ? siswa.status : "-"}</TableCell>
                      <TableCell>
                        {siswa.penghasilan_orang_tua
                          ? siswa.penghasilan_orang_tua
                          : "-"}
                      </TableCell>
                      <TableCell>
                        {siswa.tanggungan_orang_tua
                          ? siswa.tanggungan_orang_tua
                          : "-"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="laporan">
            <HasilAkhirScreen />
          </TabsContent>
        </Tabs>
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
          {role === "kps" && (
            <Button
              className="flex gap-2 justify-center"
              onClick={() => setRefetch(true)}
            >
              <FileCheck size={16} />
              <span>Validasi</span>
            </Button>
          )}
        </div>
      </div>
      <div className="mx-4 my-8">
        {isLoading ? (
          <p>Mengambil data...</p>
        ) : !dataSiswa ? (
          <p>Data Kosong</p>
        ) : (
          <DataTable
            columns={columnsSiswa}
            data={dataSiswa}
            onDeleteSuccess={() => setRefetch(true)}
          />
        )}
      </div>
    </section>
  );
};

export default SiswaScreen;
