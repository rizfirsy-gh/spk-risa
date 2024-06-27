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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export type HasilAkhir = {
  nama_alternatif: string;
  nilai: string;
  rangking: number;
};

export const kolomHasilAkhir: ColumnDef<HasilAkhir>[] = [
  {
    accessorKey: "no",
    header: () => <h3 className="font-bold">No</h3>,
    cell: ({ row }) => <div className="font-bold">{row.index + 1}</div>,
  },
  {
    accessorKey: "nama_alternatif",
    header: () => <h3 className="font-bold">Nama Alternatif</h3>,
  },
  {
    accessorKey: "nilai",
    header: () => <h3 className="font-bold">Nilai</h3>,
  },
  {
    accessorKey: "rangking",
    header: () => <h3 className="font-bold">Rangking</h3>,
  },
];
