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
import {
  generateDataPerhitungan,
  getDataPerhitungan,
  validateDataPerhitungan,
} from "./actions";
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
import { checkUserRole } from "@/app/app-utils/auth";

const PerhitunganScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [dataPerhitungan, setDataPerhitungan] = useState([
    {
      id_perhitungan: 1,
      nisn: "",
      total_nilai: 0,
      peringkat: 1,
      keterangan: "",
    },
  ]);
  const role = checkUserRole();

  console.log("role", role);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    getDataPerhitungan().then((result) => {
      console.log("result", result);
      setIsLoading(false);
      if (!ignore && result.status === 200) {
        setDataPerhitungan(result.data);
      } else {
        setDataPerhitungan([]);
      }
    });

    return () => {
      ignore = true;
    };
  }, [refetch]);

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Data Perhitungan</h1>
        {role === "adm" && (
          <Button
            className="flex gap-2 justify-center"
            variant={"outline"}
            onClick={() => {
              setRefetch(true);
              generateDataPerhitungan();
            }}
          >
            <RefreshCcw size={16} />
            <span>Generate</span>
          </Button>
        )}
        {role === "kps" && (
          <Button
            className="flex gap-2 justify-center"
            variant={"outline"}
            onClick={() => {
              setRefetch(true);
              validateDataPerhitungan();
            }}
          >
            <RefreshCcw size={16} />
            <span>Validasi data ini</span>
          </Button>
        )}
      </div>
      <Card className="mx-4 my-8">
        <CardContent>
          <Table>
            <TableCaption>
              {dataPerhitungan.length === 0
                ? "Data kriteria kosong"
                : "Tabel Perhitungan"}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-center">Kode</TableHead>
                <TableHead>NISN</TableHead>
                <TableHead>Total Nilai</TableHead>
                <TableHead>Peringkat</TableHead>
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
                dataPerhitungan.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-center">
                      {data.id_perhitungan === null ? "-" : data.id_perhitungan}
                    </TableCell>
                    <TableCell>
                      {data.nisn === null ? "-" : data.nisn}
                    </TableCell>
                    <TableCell>
                      {data.total_nilai === null ? "-" : data.total_nilai}
                    </TableCell>
                    <TableCell>
                      {data.peringkat === null ? "-" : data.peringkat}
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

export default PerhitunganScreen;
