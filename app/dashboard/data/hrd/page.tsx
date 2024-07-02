import { Button } from "@/components/ui/button";
import { kolomUser, User } from "../../components/kolom-user";
import { DataTable } from "@/components/ui/data-table";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FormTambahUser from "../../components/form-tambah-user";
import { getDataClusterManager, getDataHRD } from "@/app/app-utils/fetch";

const HRDScreen = async () => {
  const data = await getDataHRD();
  const dataKolom: { nama: string }[] = [];
  data.map((item) =>
    dataKolom.push({
      nama: item.nama_hrd,
    })
  );

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Data Karyawan</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Tambah data</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="mb-8">
              <SheetTitle>Tambahkan Data Baru</SheetTitle>
            </SheetHeader>
            <FormTambahUser targettedRole="hrd" />
          </SheetContent>
        </Sheet>
      </div>
      <div className="mx-4 my-8">
        <DataTable
          columns={kolomUser}
          data={dataKolom}
          columnName="nama"
          filterPlaceholder="Cari berdasarkan nama..."
        />
      </div>
    </section>
  );
};

export default HRDScreen;