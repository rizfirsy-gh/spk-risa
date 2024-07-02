import { decodeToken } from "./auth";

const baseUrl = "http://localhost:4008/api/auth/login";

export async function postAdminAuth(data: any) {
  const res = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });

  const json = await res.json();

  if (res.status == 200) {
    const decoded = decodeToken(json.data.token);
    localStorage.setItem("token", json.data.token);
    localStorage.setItem("role", decoded.kode_role);

    return {
      status: json.status,
      message: json.message,
      role: decoded.kode_role,
    };
  }

  return {
    status: json.status,
    message: json.message,
  };
}
