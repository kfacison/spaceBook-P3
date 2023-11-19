const Post = require('../../models/post');

module.exports = {
    createPost,
    getAll,
    update,
    deletePost
}

async function deletePost(req, res) {
    console.log("Hit deletePost controller")
}

async function update(req, res) {
    console.log("Hit update post controller")
}

async function getAll(req, res) {
    console.log("Hit getAll posts controller")
}

async function createPost(req, res) {
    console.log("Hit createPost  controller")
}