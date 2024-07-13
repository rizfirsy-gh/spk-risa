"use client";

import React, { useEffect, useState } from "react";
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
import { getDataKepsek } from "./actions";

const KepalaSekolahScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [dataKepalaSekolah, setDataKepalaSekolah] = useState([
    {
      id_kepsek: 0,
      username: "",
      nama_kepsek: "",
    },
  ]);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    getDataKepsek().then((result) => {
      console.log("result", result);
      setIsLoading(false);
      if (!ignore && result.status === 200) {
        setDataKepalaSekolah(result.data);
      } else {
        setDataKepalaSekolah([]);
      }
    });

    return () => {
      ignore = true;
    };
  }, [refetch]);

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Data Kriteria</h1>
      </div>
      <Card className="mx-4 my-8">
        <CardContent>
          <Table>
            <TableCaption>
              {dataKepalaSekolah && dataKepalaSekolah.length === 0
                ? "Data kosong"
                : "Tabel Kepala Sekolah"}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-center w-[100px]">
                  ID
                </TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Nama</TableHead>
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
                dataKepalaSekolah.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-bold text-center">
                      {data.id_kepsek === null ? "-" : "C" + data.id_kepsek}
                    </TableCell>
                    <TableCell>
                      {data.username === null ? "-" : data.username}
                    </TableCell>
                    <TableCell>
                      {data.nama_kepsek === null ? "-" : data.nama_kepsek}
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

export default KepalaSekolahScreen;
