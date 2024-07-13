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
import { getDataHasilAkhir } from "./actions";
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

const HasilAkhirScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [dataHasilAkhir, setDataHasilAkhir] = useState([
    {
      nisn: "",
      nama_siswa: "",
      kelas: 1,
      penghasilan_orang_tua: "",
      tanggungan_orang_tua: "",
      total_nilai: 0,
      peringkat: 1,
      keterangan: "",
    },
  ]);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    getDataHasilAkhir().then((result) => {
      console.log("result", result);
      setIsLoading(false);
      if (!ignore && result.status === 200) {
        setDataHasilAkhir(result.data);
      } else {
        setDataHasilAkhir([]);
      }
    });

    return () => {
      ignore = true;
    };
  }, [refetch]);

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Data Hasil Akhir</h1>
      </div>
      <Card className="mx-4 my-8">
        <CardContent>
          <Table>
            <TableCaption>
              {dataHasilAkhir.length === 0
                ? "Data kriteria kosong"
                : "Tabel Laporan Hasil"}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-center">No</TableHead>
                <TableHead>NISN</TableHead>
                <TableHead>Nama Siswa</TableHead>
                <TableHead>Kelas</TableHead>
                <TableHead>Penghasilan Orang Tua</TableHead>
                <TableHead>Tanggungan Orang Tua</TableHead>
                <TableHead>Peringkat</TableHead>
                <TableHead>Total Nilai</TableHead>
                <TableHead>Keterangan</TableHead>
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
                dataHasilAkhir.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-center">
                      {index + 1}
                    </TableCell>
                    <TableCell>
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
                      {data.peringkat === null ? "-" : data.peringkat}
                    </TableCell>
                    <TableCell>
                      {data.total_nilai === null ? "-" : data.total_nilai}
                    </TableCell>
                    <TableCell>
                      {data.keterangan === null ? "-" : data.keterangan}
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

export default HasilAkhirScreen;
