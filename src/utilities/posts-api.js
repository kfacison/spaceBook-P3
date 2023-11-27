// Use sendRequest to handle fetch
import sendRequest from './send-request';

// Base URL must be updated in each route to handle the unique profile ID
const BASE_URL = '/api/profiles/';

// ProfilePage needs a state for pagePosts
// The "post" parameter needs to be an object with author, target, and content properties

// Create a post
export function createPost(profile, newPost) {
    return sendRequest(`${BASE_URL}/${profile}/posts`, 'POST', newPost)
}

// Edit a post -- REACH GOAL
export function updatePost(profile) {
    return sendRequest(`${BASE_URL}${profile}/posts`, 'PUT', profile)
}

// Delete a post -- REACH GOAL
export function deletePost(profile) {
    return sendRequest(`${BASE_URL}${profile}/posts`, 'DELETE', profile)
}

// Get posts for profile (should this be handled by the profiles-api?)
// Populate the pagePosts state with useEffect and the getProfile profiles-api
export function getPosts(profile) {
    console.log(`${BASE_URL}${profile}/posts`);
    // return sendRequest(`api/profiles/${profile}/posts`)
    return sendRequest(`${BASE_URL}${profile}/posts`, 'GET')
}
