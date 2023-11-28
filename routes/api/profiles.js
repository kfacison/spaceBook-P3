const express = require("express");
const router = express.Router();
const profilesCtrl = require("../../controllers/api/profiles");
const postsCtrl = require("../../controllers/api/posts");
const ensureLoggedIn = require("../../config/ensureLoggedIn");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// In server.js, routes begin with api/profiles

// GET /api/profiles/:id -- Gets active user's profile
router.get("/:id", ensureLoggedIn, profilesCtrl.getProfile);

// GET /api/profiles/:id/other -- Gets the profile of another user
router.get("/:id/other", ensureLoggedIn, profilesCtrl.getOther);

// GET /api/profiles/:id/posts -- Gets the posts for a profile
router.get("/:id/posts", ensureLoggedIn, postsCtrl.getPosts);

// GET /api/profiles -- Gets all profiles
router.get("/", ensureLoggedIn, profilesCtrl.getAll);

// POST /api/profiles/:id -- Create user profile
router.post("/:id", ensureLoggedIn, profilesCtrl.createProfile);

// POST /api/profiles/:id/posts -- Create a post on your profile
router.post("/:id/posts", ensureLoggedIn, postsCtrl.createPost);

// PUT /api/profiles/:id -- Update your profile
router.put(
  "/:id",
  ensureLoggedIn,
  upload.single("avatar"),
  profilesCtrl.update
);
// router.put("/:id/edit", ensureLoggedIn, profilesCtrl.update);

// DELETE /api/profiles/:id -- Delete your profile
router.delete("/:id", ensureLoggedIn, profilesCtrl.deleteProfile);



// Route for adding a friend
// router.post('/', ensureLoggedIn, profilesCtrl.addFriend);

// PUT /api/profiles/:id/posts -- Update a post you created (REACH)
router.put("/", ensureLoggedIn, postsCtrl.updatePost);

// DELETE /api/profiles/:id/posts  -- Delete a post you created (REACH)
router.delete("/", ensureLoggedIn, postsCtrl.deletePost);

module.exports = router;
