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
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl">Kepala Sekolah</h1>
      </div>
      {isLoading ? (
        <p>Mendapatkan data...</p>
      ) : (
        dataKepalaSekolah.map((data, index) => (
          <Card className="w-[400px]">
            <CardHeader className="font-semibold text-md">
              {data.nama_kepsek === null ? "-" : data.nama_kepsek}
            </CardHeader>
            <CardContent>
              <p>{data.id_kepsek === null ? "-" : "ID: " + data.id_kepsek}</p>
              <p>
                {data.username === null ? "-" : "Username: " + data.username}
              </p>
            </CardContent>
          </Card>
        ))
      )}
    </section>
  );
};

export default KepalaSekolahScreen;
