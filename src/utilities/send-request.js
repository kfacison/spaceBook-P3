import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {
  const options = { method };
  if (payload) {
    // Check if the payload is an instance of FormData
    if (!(payload instanceof FormData)) {
      options.headers = { "Content-Type": "application/json" };
      options.body = JSON.stringify(payload);
    } else {
      // For FormData, let the browser set the Content-Type header
      options.body = payload;
    }
  }
  const token = getToken();
  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}
