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
import { DataTableHasilAkhir } from "./components/data-table-hasil-akhir";
import { columnsHasilAkhir } from "./components/columns";
import { HasilAkhirType } from "@/app/app-utils/models";
import { RefreshCcw } from "lucide-react";

const HasilAkhirScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [dataHasilAkhir, setDataHasilAkhir] = useState<Array<HasilAkhirType>>([
    {
      nisn: "",
      nama_siswa: "",
      kelas: 1,
      penghasilan_orang_tua: 0,
      tanggungan_orang_tua: 0,
      total_nilai: 0,
      peringkat: 1,
      keterangan: "",
    },
  ]);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    getDataHasilAkhir().then((result) => {
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
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl my-4">Data Hasil Akhir</h1>
        <Button
          className="flex gap-2 justify-center"
          variant={"outline"}
          onClick={() => setRefetch(true)}
        >
          <RefreshCcw size={16} />
          <span>Refresh</span>
        </Button>
      </div>
      {isLoading ? (
        <p>Mengambil data...</p>
      ) : dataHasilAkhir ? (
        <DataTableHasilAkhir
          columns={columnsHasilAkhir}
          data={dataHasilAkhir}
        />
      ) : (
        "Belum ada data yang di validasi"
      )}
    </section>
  );
};

export default HasilAkhirScreen;
