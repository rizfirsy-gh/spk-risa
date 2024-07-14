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

export type HasilAkhirType = {
  nisn: string;
  nama_siswa: string;
  kelas: number;
  penghasilan_orang_tua: number;
  tanggungan_orang_tua: number;
  peringkat: number;
  total_nilai: number;
  keterangan: string;
};

export type PenilaianType = {
  id: string;
  nisn: string;
  nama_siswa: string;
  penghasilan_orang_tua: number;
  tanggungan_orang_tua: number;
  kelas: number;
  bobot: number;
  kategori_bobot: string;
};
