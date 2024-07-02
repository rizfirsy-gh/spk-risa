import {cache} from 'react'
import {Karyawan} from "@/app/dashboard/data/karyawan/kolom-karyawan";

export const getDataKaryawan = cache(async (): Promise<{ nama_karyawan: string }[]> => {
    const data = fetch('');
    return [
        {
            nama_karyawan: "Ed Sheeran",
        },
    ];
})

export const getDataClusterManager = cache(async (): Promise<{ nama_cm: string }[]> => {
    const data = fetch('');
    return [
        {
            nama_cm: "CM Ed Sheeran",
        },
    ];
})
