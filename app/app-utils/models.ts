// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type SiswaType = {
  nisn: string;
  nama_siswa: string;
  kelas: number;
  status: string;
  alamat: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  penghasilan_orang_tua: number;
  tanggungan_orang_tua: number;
};
