import { getToken } from "@/app/app-utils/auth";

export async function getDataPenelitian() {
  try {
    const token = getToken();
    console.log("token", token);
    const res = await fetch("http://localhost:4008/api/penelitian", {
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
