"use client";

import { ColumnDef } from "@tanstack/react-table";

export type MatrixKeputusan = {
  nama_alternatif: string;
  c1: string;
  c2: string;
  c3: string;
  c4: string;
  c5: string;
  c6: string;
  c7: string;
  c8: string;
  c9: string;
  c10: string;
};

export const kolomMatrixKeputusan: ColumnDef<MatrixKeputusan>[] = [
  {
    accessorKey: "no",
    header: () => <h3 className="font-bold">No</h3>,
    cell: ({ row }) => <div className="font-bold">{row.index + 1}</div>,
  },
  {
    accessorKey: "nama_alternatif",
    header: () => <h3 className="font-bold">Nama Alternatif</h3>,
  },
];

for (let i = 1; i <= 10; i++) {
  kolomMatrixKeputusan.push({
    accessorKey: `c${i}`,
    header: () => <h3 className="font-bold">{`C${i}`}</h3>,
  });
}
