// Use sendRequest to handle fetch
import sendRequest from "./send-request";

const BASE_URL = "/api/profiles";

// Retrieve user's profile (controller accesses user info via the req)
export function getProfile(user) {
  return sendRequest(`${BASE_URL}/${user?._id}`);
}

// Retrieve someone else's profile
export function getOther(id) {
  return sendRequest(`${BASE_URL}/${id}/other`);
}

// Update user's profile
export function update(formData) {
  return sendRequest(`${BASE_URL}/${formData._id}`, "PUT", formData);
}

// Delete the user and their profile
export function deleteProfile(user) {
  return sendRequest(`${BASE_URL}/${user}`, "DELETE");
}

// Get all user profiles
export function getAll() {
  return sendRequest(BASE_URL);
}

// Create a profile for a new user
export function createProfile(user) {
  return sendRequest(`${BASE_URL}/${user?._id}`, "POST");
}
