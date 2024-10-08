"use client";

import { convertMonth } from "@/app/app-utils/post_data";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { deleteSiswa } from "../action";
import { useToast } from "@/components/ui/use-toast";
import FormUpdateSiswa from "./form-update-siswa";
import { SiswaType } from "@/app/app-utils/models";
import { checkUserRole } from "@/app/app-utils/auth";

const role = checkUserRole();

export const columnsSiswa: ColumnDef<SiswaType>[] = [
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
    accessorKey: "kelas",
    header: "Kelas",
    cell: ({ row }) => {
      return <p>{row.getValue("kelas") ? row.getValue("kelas") : "-"}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <p>{row.getValue("status") ? row.getValue("status") : "-"}</p>;
    },
  },
  {
    accessorKey: "alamat",
    header: "Alamat",
    cell: ({ row }) => {
      return <p>{row.getValue("alamat") ? row.getValue("alamat") : "-"}</p>;
    },
  },
  {
    accessorKey: "tempat_lahir",
    header: "Tempat Lahir",
    cell: ({ row }) => {
      return (
        <p>
          {row.getValue("tempat_lahir") ? row.getValue("tempat_lahir") : "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "tanggal_lahir",
    header: "Tanggal Lahir",
    cell: ({ row }) => {
      if (row.getValue("tanggal_lahir")) {
        const utcDate: string = row.getValue("tanggal_lahir");
        const localDate = new Date(utcDate);
        const date = localDate.getDate();
        const month = convertMonth(localDate.getMonth() + 1);
        const year = localDate.getFullYear();
        const tanggalLahir = `${date} ${month} ${year}`;

        console.log("localDate.getDay()", localDate.getDate() + 1);

        return <p>{tanggalLahir}</p>;
      }
      return <p>-</p>;
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
];

if (role === "adm") {
  columnsSiswa.push({
    id: "actions",
    cell: ({ row }) => {
      const [updateFormIsOpen, setUpdateFormIsOpen] = useState(false);
      const { toast } = useToast();
      return (
        <div className="flex items-center gap-2">
          <Sheet open={updateFormIsOpen} onOpenChange={setUpdateFormIsOpen}>
            <SheetTrigger>
              <Button variant="outline" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full overflow-scroll">
              <SheetHeader>
                <SheetTitle>Ubah Data Siswa</SheetTitle>
              </SheetHeader>
              <FormUpdateSiswa
                data={row.original}
                onUpdateFinished={(value: boolean) => {
                  setUpdateFormIsOpen(value);
                }}
              />
            </SheetContent>
          </Sheet>
          <Button
            variant="outline"
            size="icon"
            onClick={async () => {
              console.log("nisn", row.getValue("nisn"));
              const res = await deleteSiswa(row.getValue("nisn"));
              toast({
                variant: "destructive",
                description: res.message,
              });
            }}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      );
    },
  });
}
