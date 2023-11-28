const Post = require("../../models/post");
const Profile = require("../../models/profile");

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPosts,
};

async function deletePost(req, res) {
  console.log("Hit deletePost controller");
}

async function updatePost(req, res) {
  console.log("Hit update post controller");
}

// Access through the Profiles route (bc it loads with the ProfilePage)
async function getPosts(req, res) {
  console.log("Hit getAll posts controller");
  // Take the profileId (pass from the browser url) and get the profile doc (query Profiles)
  // Take the posts array from the profile doc, and find all posts listed in that array (query & populate Posts)
  // Send the array of post docs back to the page (which needs to update state)
  // console.log(req);
  console.log(req.params.id, "User id in req.params.id");
  try {
    // Populate the posts associated with the user
    const profile = await Profile.findOne({ _id : req.params.id }).populate(
      "posts"
    );
    console.log(profile);
    if (profile) {
      res.json(profile.posts);
    } else {
      console.log("Sending back empty array")
      res.json([])
    }
  } catch (error) {
    console.log(error);
  }
}

async function createPost(req, res) {
  console.log("Hit createPost  controller");
  console.log(req.body);
  try {
    const post = new Post(req.body);
    await post.save();
    console.log(`Saved post: ${post}`);
    console.log(req.body.author);
    // Save the post id into the profile's Posts array
    const newPost = post._id;
    // Need to update when profile url/id is fixed
    const profile = await Profile.findOne({ _id: req.body.author }).exec();

    // Add the post to the target's/user's profile
    profile.posts.push(newPost);
    await profile.save();
    console.log(profile);
    profile.populate("posts");
    // Send back the profile's updated and populated posts
    res.json(profile.posts);
  } catch {
    console.log(`Failed to create post`);
  }
}
