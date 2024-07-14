"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getDataPenilaian } from "./actions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { RefreshCcw } from "lucide-react";
import { PenilaianType } from "@/app/app-utils/models";

const PenilaianScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [dataPenilaian, setDataPenilaian] = useState<Array<PenilaianType>>([]);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    getDataPenilaian().then((result) => {
      console.log("result", result);
      setIsLoading(false);
      if (!ignore && result.status === 200) {
        setDataPenilaian(result.data);
      } else {
        setDataPenilaian([]);
      }
    });

    return () => {
      ignore = true;
    };
  }, [refetch]);

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Data Penilaian</h1>
        <Button
          className="flex gap-2 justify-center"
          variant={"outline"}
          onClick={() => setRefetch(true)}
        >
          <RefreshCcw size={16} />
          <span>Refresh</span>
        </Button>
      </div>
      <Card className="mx-4 my-8">
        <CardContent>
          <Table>
            <TableCaption>
              {dataPenilaian.length === 0
                ? "Data penilaian kosong"
                : "Tabel Penilaian"}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">NISN</TableHead>
                <TableHead>Nama Siswa</TableHead>
                <TableHead>Kelas</TableHead>
                <TableHead>Penghasilan Orang Tua</TableHead>
                <TableHead>Tanggungan Orang Tua</TableHead>
                <TableHead>Bobot</TableHead>
                <TableHead>Kategori Bobot</TableHead>
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
                dataPenilaian.map((data, index) => (
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
                      {data.bobot === null ? "-" : data.bobot}
                    </TableCell>
                    <TableCell>
                      {data.kategori_bobot === null ? "-" : data.kategori_bobot}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};

export default PenilaianScreen;
