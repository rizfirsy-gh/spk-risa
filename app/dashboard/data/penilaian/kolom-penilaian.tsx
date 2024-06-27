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
import FormInputNilai from "./form-input-nilai";

export type Penilaian = {
  nama_alternatif: string;
};

export const kolomPenilaian: ColumnDef<Penilaian>[] = [
  {
    accessorKey: "no",
    header: () => <h3 className="font-bold">No</h3>,
    cell: ({ row }) => <div className="font-bold">{row.index + 1}</div>,
  },
  {
    accessorKey: "nama_alternatif",
    header: () => <h3 className="font-bold">Alternatif</h3>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"}>Input Nilai</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="mb-8">
              <SheetTitle>Beri penilaian</SheetTitle>
            </SheetHeader>
            <FormInputNilai />
          </SheetContent>
        </Sheet>
      );
    },
  },
];
