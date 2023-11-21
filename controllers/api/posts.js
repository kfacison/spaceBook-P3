const Post = require('../../models/post');

module.exports = {
    createPost,
    updatePost,
    deletePost
}

async function deletePost(req, res) {
    console.log("Hit deletePost controller")
}

async function updatePost(req, res) {
    console.log("Hit update post controller")
}

// Access through the Profiles route (bc it loads with the ProfilePage)
async function getAll(req, res) {
    console.log("Hit getAll posts controller")
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