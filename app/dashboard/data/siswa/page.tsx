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

const SiswaScreen = async () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Data Siswa</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Tambah data</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="mb-8">
              <SheetTitle>Tambahkan Data Baru</SheetTitle>
            </SheetHeader>
            <FormTambahUser targettedRole="cm" />
          </SheetContent>
        </Sheet>
      </div>
      <div className="mx-4 my-8">tabel</div>
    </section>
  );
};

export default SiswaScreen;
