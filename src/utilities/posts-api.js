// Use sendRequest to handle fetch
import sendRequest from './send-request';

const BASE_URL = '/api/profiles/:id/posts';

// ProfilePage needs a state for pagePosts
// The "post" parameter needs to be an object with author, target, and content properties

// Create a post
export function createPost(profile) {
    return sendRequest(`${BASE_URL}/${profile}`, 'POST', profile)
}

// Edit a post -- REACH GOAL
export function updatePost(profile) {
    return sendRequest(`${BASE_URL}/${profile}`, 'PUT', profile)
}

// Delete a post -- REACH GOAL
export function deletePost(profile) {
    return sendRequest(`${BASE_URL}/${profile}`, 'DELETE', profile)
}

// Get posts for profile (should this be handled by the profiles-api?)
// Populate the pagePosts state with useEffect and the getProfile profiles-api
export function getPosts(profile) {
    return sendRequest(BASE_URL, 'GET', profile)
}
