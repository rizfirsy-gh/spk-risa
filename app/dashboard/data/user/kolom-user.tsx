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

export type User = {
  nama: string;
  email: string;
  username: string;
  level: string;
};

export const kolomUser: ColumnDef<User>[] = [
  {
    accessorKey: "no",
    header: () => <h3 className="font-bold">No</h3>,
    cell: ({ row }) => <div className="font-bold">{row.index + 1}</div>,
  },
  {
    accessorKey: "nama",
    header: () => <h3 className="font-bold">Nama</h3>,
  },
  {
    accessorKey: "email",
    header: () => <h3 className="font-bold">Email</h3>,
  },
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Username
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "level",
    header: () => <h3 className="font-bold">Level</h3>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => {}}>Detail</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {}}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {}}>Hapus</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
