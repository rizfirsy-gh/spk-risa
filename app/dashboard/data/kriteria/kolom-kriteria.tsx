"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Kriteria = {
  kode_kriteria: string;
  nama_kriteria: string;
  tingkat_prioritas: number;
  jenis: string;
  bobot: string;
};

export const kolomKriteria: ColumnDef<Kriteria>[] = [
  {
    accessorKey: "no",
    header: () => <h3 className="font-bold">No</h3>,
    cell: ({ row }) => <div className="font-bold">{row.index + 1}</div>,
  },
  {
    accessorKey: "kode_kriteria",
    header: () => <h3 className="font-bold">Kode Kriteria</h3>,
  },
  {
    accessorKey: "nama_kriteria",
    header: () => <h3 className="font-bold">Nama Kriteria</h3>,
  },
  {
    accessorKey: "tingkat_prioritas",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tingkat Prioritas
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "jenis",
    header: () => <h3 className="font-bold">Jenis</h3>,
  },
  {
    accessorKey: "bobot",
    header: () => <h3 className="font-bold">Bobot</h3>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => {}}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {}}>Hapus</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
