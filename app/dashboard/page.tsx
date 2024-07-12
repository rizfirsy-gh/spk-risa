"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { checkUserRole } from "../app-utils/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const role = checkUserRole();
  const route = useRouter();

  // if (role === "shm") {
  //   return <ShiftManagerDashboard>{children}</ShiftManagerDashboard>;
  // }

  // if (role === "cm") {
  //   return <ClusterManagerDashboard>{children}</ClusterManagerDashboard>;
  // }

  // if (role === "hrd") {
  //   return <HRDDashboard>{children}</HRDDashboard>;
  // }

  // if (role === "kry") {
  //   return <KaryawanDashboard>{children}</KaryawanDashboard>;
  // }

  if (role === "adm") {
    return (
      <div>
        <Card className="mb-8">
          <CardHeader>
            <b>Selamat datang, Admin.</b>
          </CardHeader>
          <CardContent>
            Selamat Datang Admin di Halaman Utama Decision Support Systems
            <br />
            Untuk Penentuan Penerimaan Bantuan Untuk Anak Yatim Piatu
            Menggunakan Metode PROMETHEE
          </CardContent>
        </Card>
        <h1 className="my-4 font-bold text-lg">Menu</h1>
        <section className="grid grid-cols-3 gap-4">
          <Link href={"dashboard/data/kriteria"}>
            <Card>
              <CardHeader>
                <CardTitle>Data Kriteria</CardTitle>
              </CardHeader>
            </Card>
          </Link>
          <Link href={"dashboard/data/siswa"}>
            <Card>
              <CardHeader>
                <CardTitle>Data Siswa</CardTitle>
              </CardHeader>
            </Card>
          </Link>
          <Link href={"dashboard/data/kepala-sekolah"}>
            <Card>
              <CardHeader>
                <CardTitle>Data Kepala Sekolah</CardTitle>
              </CardHeader>
            </Card>
          </Link>
          <Link href={"dashboard/data/penilaian"}>
            <Card>
              <CardHeader>
                <CardTitle>Data Penilaian</CardTitle>
              </CardHeader>
            </Card>
          </Link>
          <Link href={"dashboard/data/perhitungan"}>
            <Card>
              <CardHeader>
                <CardTitle>Data Perhitungan</CardTitle>
              </CardHeader>
            </Card>
          </Link>
          <Link href={"dashboard/data/hasil-akhir"}>
            <Card>
              <CardHeader>
                <CardTitle>Data Hasil Akhir</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        </section>
      </div>
    );
  }

  route.push("/");
};

export default DashboardLayout;
