import { getNisn, getToken } from "@/app/app-utils/auth";

export async function getDataSiswa() {
  try {
    const token = getToken();
    console.log("token", token);
    const res = await fetch("http://localhost:4008/api/account-users/siswa", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = res.json();

    console.log("json", json);

    return json;
  } catch (error) {
    return error;
  }
}

export async function validateDataSiswa() {
  try {
    const token = getToken();
    console.log("token", token);
    const res = await fetch("http://localhost:4008/api/account-users/siswa", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = res.json();

    console.log("json", json);

    return json;
  } catch (error) {
    return error;
  }
}

export async function getSiswaByNisn() {
  try {
    const token = getToken();
    const nisn = getNisn();
    console.log("nisn", nisn);
    const res = await fetch(
      `http://localhost:4008/api/account-users/siswa-detail/${nisn}`,
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

export async function deleteSiswa(nisn: number) {
  try {
    const token = getToken();
    const res = await fetch(
      `http://localhost:4008/api/account-users/delete/${nisn}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = res.json();
    console.log("json", json);
    return json;
  } catch (error) {
    return error;
  }
}

export async function addSiswa(data: any) {
  try {
    const token = getToken();
    console.log("token", token);
    console.log("data", data);
    const res = await fetch("http://localhost:4008/api/account-users/regist", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await res.json();

    console.log("json", json);

    return json;
  } catch (error) {
    return error;
  }
}

export async function updateSiswa(nisn: string, data: any) {
  try {
    const token = getToken();
    console.log("token", token);
    console.log("data", data);
    const res = await fetch(
      `http://localhost:4008/api/account-users/update-siswa/${nisn}`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = res.json();

    console.log("json", json);

    return json;
  } catch (error) {
    return error;
  }
}

export async function updateProfileSiswa(nisn: string, data: any) {
  try {
    const token = getToken();
    console.log("token", token);
    console.log("data", data);
    const res = await fetch(
      `http://localhost:4008/api/account-users/profile-siswa/${nisn}`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = res.json();

    console.log("json", json);

    return json;
  } catch (error) {
    return error;
  }
}

export async function updateOrder(kode_kriteria: number, order_type: string) {
  try {
    const data = {
      kode_kriteria,
      order_type,
    };
    const token = getToken();
    const res = await fetch(`http://localhost:4008/api/siswa/order`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const json = res.json();

    return json;
  } catch (error) {
    return error;
  }
}
