// Use sendRequest to handle fetch
import sendRequest from './send-request';

const BASE_URL = '/api/profiles/:id/posts';

// ProfilePage needs a state for pagePosts
// The "post" parameter needs to be an object with author, target, and content properties

// Create a post
export function createPost(post) {
    return sendRequest(`${BASE_URL}/${post.target}`, 'POST', post)
}

// Edit a post -- REACH GOAL
export function updatePost(post) {
    return sendRequest(`${BASE_URL}/${post.target}`, 'PUT', post)
}

// Delete a post -- REACH GOAL
export function deletePost(user) {
    return sendRequest(`${BASE_URL}/${post.target}`, 'DELETE', post)
}

// Get posts for profile (should this be handled by the profiles-api?)
// Populate the pagePosts state with useEffect and the getProfile profiles-api
export function getPosts() {
    return sendRequest(BASE_URL)
}
