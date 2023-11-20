// Use sendRequest to handle fetch
import sendRequest from './send-request';

const BASE_URL = '/api/profiles/:id/posts';

// Retrieve user's posts
export function createPost(user) {
    return sendRequest(`${BASE_URL}/${user._id}`)
}

export function updatePost(user) {
    return sendRequest(`${BASE_URL}/${user._id}`, 'PUT')
}

export function deletePost(user) {
    return sendRequest(`${BASE_URL}/${user._id}`, 'DELETE')
}

export function getPosts() {
    return sendRequest(BASE_URL)
}
