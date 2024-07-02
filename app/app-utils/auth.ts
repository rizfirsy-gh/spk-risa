import { jwtDecode } from "jwt-decode";

export function checkUserRole() {
  return "admin";
}

export function decodeToken(token: string) {
  return jwtDecode(token);
}
