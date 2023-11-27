const Post = require('../../models/post');
const Profile = require("../../models/profile");

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
    // console.log(req);
    console.log(req.user._id)
    try {
        // Populate the posts associated with the user
        const profile = await Profile.findOne({user: req.user._id}).populate('posts');
        res.json(profile.posts);
    } catch (error) {
        console.log(error);
    }
}

async function createPost(req, res) {
    console.log("Hit createPost  controller")
    try {
        const post = new Post({content: req.body.content, author: "author"})
        await post.save();
        console.log(post);
        // Save the post id into the profile's Posts array
        const profile = await Profile.findOne({ _id : req.body._id });
        profile.posts.push(post._id);
        res.json(post);
    } catch {
        console.log(`Failed to create post`)
    }
}