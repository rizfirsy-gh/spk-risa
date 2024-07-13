import { jwtDecode } from "jwt-decode";
const baseUrl = "http://localhost:4008/api";

export function checkUserRole() {
  return localStorage.getItem("user_role");
}

export function getToken() {
  return localStorage.getItem("token");
}

type DecodedTokenType = {
  id: "string";
  username: "string";
  nama: "string";
  kode_role: "string";
  iat: number;
  exp: number;
};

export function decodeToken(token: string) {
  return jwtDecode<DecodedTokenType>(token);
}

export async function login(data: any) {
  const res = await fetch(`${baseUrl}/auth/login`, {
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
    localStorage.setItem("user_role", decoded.kode_role);
    localStorage.setItem("user_id", decoded.id);

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

export function logout() {
  localStorage.clear();
}
