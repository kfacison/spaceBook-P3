const Post = require('../../models/post');

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getPosts
}

async function deletePost(req, res) {
    console.log("Hit deletePost controller")
}

async function updatePost(req, res) {
    console.log("Hit update post controller")
}

// Access through the Profiles route (bc it loads with the ProfilePage)
async function getPosts(req, res) {
    console.log("Hit getAll posts controller")
    // Take the profileId (pass from the browser url) and get the profile doc (query Profiles)
    // Take the posts array from the profile doc, and find all posts listed in that array (query & populate Posts)
    // Send the array of post docs back to the page (which needs to update state)
}

async function createPost(req, res) {
    console.log("Hit createPost  controller")
    try {
        const post = new Post({content: "content", author: "author", target: "target"})
        await post.save();
        console.log(post);
        res.json(post);
    } catch {
        console.log(`Failed to create post`)
    }
}