import { jwtDecode } from "jwt-decode";

export function checkUserRole() {
  return localStorage.getItem("role");
}

export function decodeToken(token: string) {
  return jwtDecode(token);
}
