import { getToken } from "@/app/app-utils/auth";

export async function getDataHasilAkhir() {
  try {
    const token = getToken();
    const res = await fetch(
      "http://localhost:4008/api/perhitungan/laporan-hasil",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return await res.json();
  } catch (error) {
    return error;
  }
}
