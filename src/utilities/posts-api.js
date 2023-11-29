// ROUTE TO ROUTES/API/PROFILES BECAUSE OF THE PATH PROFILES/:ID/POSTS

// Use sendRequest to handle fetch
import sendRequest from './send-request';

// Base URL must be updated in each route to handle the unique profile ID
const BASE_URL = '/api/profiles/';

// Create a post
// Pass in the profile._id value for the profile parameter
// Pass in an bject with author and content properties for the newPost parameter
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

// Populate the pagePosts state with useEffect and the getProfile profiles-api
export function getPosts(profile) {
    return sendRequest(`${BASE_URL}${profile}/posts`, 'GET')
}
