import { Button } from "@/components/ui/button";
import { kolomKaryawan, Karyawan } from "./kolom-karyawan";
import { DataTable } from "@/components/ui/data-table";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FormTambahKaryawan from "./form-tambah-karyawan";
import {getDataKaryawan} from "@/app/app-utils/fetch";

const KaryawanScreen = async () => {
  const data = await getDataKaryawan();
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
            <FormTambahKaryawan />
          </SheetContent>
        </Sheet>
      </div>
      <div className="mx-4 my-8">
        <DataTable
          columns={kolomKaryawan}
          data={data}
          columnName="nama_karyawan"
          filterPlaceholder="Cari Karyawan..."
        />
      </div>
    </section>
  );
};

export default KaryawanScreen;
