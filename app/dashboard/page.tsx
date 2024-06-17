import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import React from "react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Link href={"dashboard/data/kriteria"}>
        <Card>
          <CardHeader>
            <CardTitle>Data Kriteria</CardTitle>
            <CardDescription>Berisi tentang data kriteria</CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Link href={"dashboard/data/sub-kriteria"}>
        <Card>
          <CardHeader>
            <CardTitle>Data Sub Kriteria</CardTitle>
            <CardDescription>Berisi tentang data sub kriteria</CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Link href={"dashboard/data/alternatif"}>
        <Card>
          <CardHeader>
            <CardTitle>Data Alternatif</CardTitle>
            <CardDescription>Berisi tentang data alternatif</CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Link href={"dashboard/data/penilaian"}>
        <Card>
          <CardHeader>
            <CardTitle>Data Penilaian</CardTitle>
            <CardDescription>Berisi tentang data penilaian</CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Link href={"dashboard/data/perhitungan"}>
        <Card>
          <CardHeader>
            <CardTitle>Data Perhitungan</CardTitle>
            <CardDescription>Berisi tentang data perhitungan</CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Link href={"dashboard/data/hasil-akhir"}>
        <Card>
          <CardHeader>
            <CardTitle>Data Hasil Akhir</CardTitle>
            <CardDescription>Berisi tentang data hasil akhir</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
};

export default Dashboard;
