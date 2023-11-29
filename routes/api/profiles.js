
// Routes begin with api/profiles in server.js

const express = require("express");
const router = express.Router();
const profilesCtrl = require("../../controllers/api/profiles");
const postsCtrl = require("../../controllers/api/posts");
const ensureLoggedIn = require("../../config/ensureLoggedIn");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

//ROUTES FOR PROFILES
// GET /api/profiles/:id -- Gets active user's profile
router.get("/:id", ensureLoggedIn, profilesCtrl.getProfile);

// GET /api/profiles/:id/other -- Gets the profile of another user
router.get("/:id/other", ensureLoggedIn, profilesCtrl.getOther);

// GET /api/profiles -- Gets all profiles
router.get("/", ensureLoggedIn, profilesCtrl.getAll);

// POST /api/profiles/:id -- Create user profile
router.post("/:id", ensureLoggedIn, profilesCtrl.createProfile);

// PUT /api/profiles/:id -- Update your profile
router.put(
  "/:id",
  ensureLoggedIn,
  upload.single("avatar"),
  profilesCtrl.update
);

// DELETE /api/profiles/:id -- Delete your profile
router.delete("/:id", ensureLoggedIn, profilesCtrl.deleteProfile);

// ROUTES FOR POSTS
// POST /api/profiles/:id/posts -- Create a post on your profile
router.post("/:id/posts", ensureLoggedIn, postsCtrl.createPost);

// GET /api/profiles/:id/posts -- Gets the posts for a profile
router.get("/:id/posts", ensureLoggedIn, postsCtrl.getPosts);

// REACH GOAL - PUT /api/profiles/:id/posts -- Update a post you created
router.put("/", ensureLoggedIn, postsCtrl.updatePost);

// REACH GOAL - DELETE /api/profiles/:id/posts  -- Delete a post you created
router.delete("/", ensureLoggedIn, postsCtrl.deletePost);

module.exports = router;
