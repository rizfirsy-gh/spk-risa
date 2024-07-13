"use client";

import { ColumnDef } from "@tanstack/react-table";
import { HasilAkhirType, SiswaType } from "@/app/app-utils/models";
import { Badge } from "@/components/ui/badge";

export const columnsHasilAkhir: ColumnDef<HasilAkhirType>[] = [
  {
    accessorKey: "no",
    header: "No",
    cell: ({ row }) => {
      return <p>{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "nisn",
    header: "NISN",
    cell: ({ row }) => {
      return <p>{row.getValue("nisn") ? row.getValue("nisn") : "-"}</p>;
    },
  },
  {
    accessorKey: "nama_siswa",
    header: "Nama Siswa",
    cell: ({ row }) => {
      return (
        <p>{row.getValue("nama_siswa") ? row.getValue("nama_siswa") : "-"}</p>
      );
    },
  },
  {
    accessorKey: "penghasilan_orang_tua",
    header: "Penghasilan Orang Tua",
    cell: ({ row }) => {
      const penghasilan: number = row.getValue("penghasilan_orang_tua");
      const rupiah = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      return (
        <p>
          {row.getValue("penghasilan_orang_tua")
            ? rupiah.format(penghasilan)
            : "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "tanggungan_orang_tua",
    header: "Tanggungan Orang Tua",
    cell: ({ row }) => {
      return (
        <p>
          {row.getValue("tanggungan_orang_tua")
            ? row.getValue("tanggungan_orang_tua")
            : "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "peringkat",
    header: "Peringkat",
    cell: ({ row }) => {
      return (
        <p>{row.getValue("peringkat") ? row.getValue("peringkat") : "-"}</p>
      );
    },
  },
  {
    accessorKey: "total_nilai",
    header: "Total Nilai",
    cell: ({ row }) => {
      return (
        <p>{row.getValue("total_nilai") ? row.getValue("total_nilai") : "-"}</p>
      );
    },
  },
  {
    accessorKey: "keterangan",
    header: "Keterangan",
    cell: ({ row }) => {
      const keterangan: string = row.getValue("keterangan");
      return (
        <p>
          {keterangan ? (
            keterangan === "Diterima" ? (
              <Badge variant={"good"}>{keterangan}</Badge>
            ) : (
              <Badge variant="destructive">{keterangan}</Badge>
            )
          ) : (
            "-"
          )}
        </p>
      );
    },
  },
];
