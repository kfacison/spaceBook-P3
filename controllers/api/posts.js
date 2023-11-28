const Post = require("../../models/post");
const Profile = require("../../models/profile");

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPosts,
};

// Reach Goal
async function deletePost(req, res) {
  console.log("Hit deletePost controller");
}

// Reach Goal
async function updatePost(req, res) {
  console.log("Hit update post controller");
}


async function getPosts(req, res) {
  try {
    // Populate the posts associated with the profile
    const profile = await Profile.findOne({ _id : req.params.id }).populate(
      "posts"
    );
    // Check that the profile was found
    if (profile) {
      res.json(profile.posts);
    } else {
      console.log("Sending back empty array")
      res.json([])
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

async function createPost(req, res) {
  try {
    // Create and save the new post doc
    const post = new Post(req.body);
    await post.save();
    // Get the new post's id and the author's profile
    const newPost = post._id;
    const profile = await Profile.findOne({ _id: req.body.author }).exec();
    // Add the post to the target's/user's Profile doc
    profile.posts.unshift(newPost);
    await profile.save();
    await profile.populate("posts");
    // Send back the profile's updated and populated posts
    res.json(profile.posts);
  } catch (error) {
    res.status(400).json(error);
  }
}
