"use client";
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
import { checkUserRole } from "../app-utils/auth";

const Dashboard = () => {
  const role = checkUserRole();

  if (role === "sm") {
    return (
      <div className="grid grid-cols-3 gap-4">
        <Link href={"dashboard/data/penilaian"}>
          <Card>
            <CardHeader>
              <CardTitle>Data Penilaian</CardTitle>
              <CardDescription>Berisi tentang data Penilaian</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href={"dashboard/data/penilaian"}>
          <Card>
            <CardHeader>
              <CardTitle>Data Perhitungan</CardTitle>
              <CardDescription>Berisi tentang data Perhitungan</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    );
  }

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
      <Link href={"dashboard/data/kepala-sekolah"}>
        <Card>
          <CardHeader>
            <CardTitle>Data Kepala Sekolah</CardTitle>
            <CardDescription>
              Klik disini untuk melihat data-data Kepala Sekolah
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Link href={"dashboard/data/siswa"}>
        <Card>
          <CardHeader>
            <CardTitle>Siswa</CardTitle>
            <CardDescription>
              Klik disini untuk melihat data-data siswa
            </CardDescription>
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
