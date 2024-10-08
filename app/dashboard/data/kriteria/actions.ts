import { getToken } from "@/app/app-utils/auth";

export async function getDataKriteria() {
  try {
    const token = getToken();
    console.log("token", token);
    const res = await fetch("http://localhost:4008/api/criteria", {
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
