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

const PenilaianScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [dataPenilaian, setDataPenilaian] = useState([
    {
      kode_kriteria: 0,
      nama_kriteria: "",
      jenis: "",
      bobot: null,
      tingkat_prioritas: 0,
    },
  ]);

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
                <TableHead className="w-[100px]">Kode Penilaian</TableHead>
                <TableHead>Nama Penilaian</TableHead>
                <TableHead>Jenis</TableHead>
                <TableHead>Bobot</TableHead>
                <TableHead>Tingkat Prioritas</TableHead>
                <TableHead>
                  <span className="ml-4">Urutan</span>
                </TableHead>
                <TableHead>Aksi</TableHead>
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
                      {data.kode_kriteria === null
                        ? "-"
                        : "C" + data.kode_kriteria}
                    </TableCell>
                    <TableCell>
                      {data.nama_kriteria === null ? "-" : data.nama_kriteria}
                    </TableCell>
                    <TableCell>
                      {data.jenis === null ? "-" : data.jenis}
                    </TableCell>
                    <TableCell>
                      {data.bobot === null ? "-" : data.bobot}
                    </TableCell>
                    <TableCell>
                      {data.tingkat_prioritas === null
                        ? "-"
                        : data.tingkat_prioritas}
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
