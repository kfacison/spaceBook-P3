const Profile = require("../../models/profile");
const User = require("../../models/user");
const cloudinary = require("cloudinary").v2;

module.exports = {
  createProfile,
  getProfile,
  update,
  deleteProfile,
  getOther,
  getAll
};

async function getAll(req, res) {
  try {
    const profiles = await Profile.find({});
    res.status(200).json(profiles);
  } catch {
    return res.status(500).send("Failed to return all profiles");
  }
}

async function getOther(req, res) {
  try {
    const userId = req.params.id;
    const profile = await Profile.findById(userId);
    if (!profile) {
      return res.status(404).send("Profile not found");
    }
    res.send(profile);
  } catch (err) {
    res.status(500).send("Error fetching profile");
  }
}

async function deleteProfile(req, res) {
  try {
    const profileInfo = await Profile.findOne({ user: req.params.id });
    const allProfiles = await Profile.updateMany({},{$pull:{friends:profileInfo._id}});
    const profile = await Profile.findOneAndDelete({ user: req.params.id });
    const user = await User.findOneAndDelete({ _id: req.params.id });
    // Probably an invalid response for a successful delete
    res.json(allProfiles);
  } catch(error) {
    res.status(500).json(error);
  }
}

async function update(req, res) {
  try {
    let profile = await Profile.findOne({ user: req.user?._id });
    if (!profile) {
      throw new Error("Profile not found");
    }
    // Handling file upload if exists
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      // Assuming 'avatar' is the field in your Profile model for the image URL
      profile.avatar = result.secure_url;
    }
    // Handle adding new friends
    if (req.body.friends) {
      const newFriends = req.body.friends.filter(
        (friendId) => !profile.friends.includes(friendId)
      );
      profile.friends.push(...newFriends);
    } else {
      // Update other fields
      profile.username = req.body.username || profile.username;
      profile.bio = req.body.bio || profile.bio;
      profile.species = req.body.species || profile.species;
      profile.favPlanet = req.body.favPlanet || profile.favPlanet;
    }
    // Save the updated profile then send back
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).send("Error updating profile");
  }
}

async function getProfile(req, res) {
  try {
    const userId = req.params.id;
    // If the ID in the params matches the logged-in user's ID or no ID is provided in the params
    if (!userId || userId === req.user?._id.toString()) {
      const profile = await Profile.findOne({ user: req.user?._id });
      if (!profile) {
        return res.status(404).send("Your profile not found");
      }
      return res.json(profile);
    }
    // If the ID in the params is different, find the profile by that ID
    const otherProfile = await Profile.findById(userId);
    if (!otherProfile) {
      return res.status(404).send("Profile not found");
    }
    res.json(otherProfile);
  } catch (err) {
    res.status(500).send("Error fetching profile");
  }
}

async function createProfile(req, res) {
  try {
    const profile = new Profile({
      user: req.user?._id,
      username: "Earthling",
    });
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).send(`Failed to create profile. ${error}`);
  }
}
