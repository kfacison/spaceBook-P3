// Use sendRequest to handle fetch
import sendRequest from './send-request';

const BASE_URL = '/api/profiles';

// Retrieve user's profile (controller accesses user via req)
export function getProfile() {
    return sendRequest(BASE_URL)
}

export function update() {
    return sendRequest(BASE_URL, 'POST')
}

export function deleteProfile() {
    return sendRequest(BASE_URL, 'DELETE')
}

export function getAll() {
    return sendRequest(BASE_URL)
}

