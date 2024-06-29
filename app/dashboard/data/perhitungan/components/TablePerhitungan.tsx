import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TabelPerhitungan = ({ data }: any) => {
  return (
    <Table>
      <TableCaption>Tabel Data Matrix Keputusan</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Nama Alternatif</TableHead>
          <TableHead>C1</TableHead>
          <TableHead>C2</TableHead>
          <TableHead>C3</TableHead>
          <TableHead>C4</TableHead>
          <TableHead>C5</TableHead>
          <TableHead>C6</TableHead>
          <TableHead>C7</TableHead>
          <TableHead>C8</TableHead>
          <TableHead>C2</TableHead>
          <TableHead>C10</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((x: any) => (
          <TableRow key={x.no}>
            <TableCell className="font-medium">{x.no}</TableCell>
            <TableCell>{x.namaAlternatif}</TableCell>
            <TableCell>{x.c1}</TableCell>
            <TableCell>{x.c2}</TableCell>
            <TableCell>{x.c2}</TableCell>
            <TableCell>{x.c2}</TableCell>
            <TableCell>{x.c2}</TableCell>
            <TableCell>{x.c2}</TableCell>
            <TableCell>{x.c2}</TableCell>
            <TableCell>{x.c2}</TableCell>
            <TableCell>{x.c2}</TableCell>
            <TableCell>{x.c2}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="bg-green-600/10">
          <TableCell colSpan={2}>MAX</TableCell>
          <TableCell className="font-bold text-green-700 dark:text-green-400">
            250
          </TableCell>
          <TableCell className="font-bold text-green-700 dark:text-green-400">
            50
          </TableCell>
          <TableCell className="font-bold text-green-700 dark:text-green-400">
            50
          </TableCell>
          <TableCell className="font-bold text-green-700 dark:text-green-400">
            50
          </TableCell>
          <TableCell className="font-bold text-green-700 dark:text-green-400">
            50
          </TableCell>
          <TableCell className="font-bold text-green-700 dark:text-green-400">
            50
          </TableCell>
          <TableCell className="font-bold text-green-700 dark:text-green-400">
            50
          </TableCell>
          <TableCell className="font-bold text-green-700 dark:text-green-400">
            50
          </TableCell>
          <TableCell className="font-bold text-green-700 dark:text-green-400">
            50
          </TableCell>
          <TableCell className="font-bold text-green-700 dark:text-green-400">
            50
          </TableCell>
        </TableRow>
        <TableRow className="bg-pink-600/10">
          <TableCell colSpan={2}>MIN</TableCell>
          <TableCell className="font-bold text-pink-600 dark:text-pink-400">
            250
          </TableCell>
          <TableCell className="font-bold text-pink-600 dark:text-pink-400">
            250
          </TableCell>
          <TableCell className="font-bold text-pink-600 dark:text-pink-400">
            250
          </TableCell>
          <TableCell className="font-bold text-pink-600 dark:text-pink-400">
            250
          </TableCell>
          <TableCell className="font-bold text-pink-600 dark:text-pink-400">
            250
          </TableCell>
          <TableCell className="font-bold text-pink-600 dark:text-pink-400">
            250
          </TableCell>
          <TableCell className="font-bold text-pink-600 dark:text-pink-400">
            250
          </TableCell>
          <TableCell className="font-bold text-pink-600 dark:text-pink-400">
            250
          </TableCell>
          <TableCell className="font-bold text-pink-600 dark:text-pink-400">
            250
          </TableCell>
          <TableCell className="font-bold text-pink-600 dark:text-pink-400">
            50
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TabelPerhitungan;
