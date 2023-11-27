const Profile = require("../../models/profile");
const User = require("../../models/user");

module.exports = {
  createProfile,
  getProfile,
  update,
  deleteProfile,
  getAll,
  getOther,
};

async function getAll(req, res) {
  console.log("Hit getAll controller");
  // Update later and set limit to 100 profiles
  try {
    const profiles = await Profile.find({});
    // console.log(profiles);
    res.status(200).json(profiles);
  } catch {
    console.log("Failed to retrieve all profiles");
  }
}
async function getOther(req, res) {
  try {
    const userId = req.params.id;
    console.log(userId);

    const profile = await Profile.findById(userId);
    if (!profile) {
      return res.status(404).send("Profile not found");
    }

    res.send(profile);
    console.log(profile);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching profile");
  }
}
// Does this need to delete the user?
async function deleteProfile(req, res) {
  console.log("Hit deleteProfile controller");
  try {
    const profile = await Profile.findByIdAndDelete({ user: req.user._id });
    const user = await User.findByIdAndDelete({ _id: req.user._id });
    // Probably an invalid response for a successful delete
    res.json(profile);
  } catch {
    console.log(`Failed to retrieve user's profile`);
  }
}

async function update(req, res) {
  console.log("Hit update controller");
  try {
    let profile;
    if (req.body.friends) {
      profile = await Profile.findOne({ _id: req.body._id });
      if (!profile) {
        throw new Error("Profile not found");
      }
      // Adding new friends while avoiding duplicates
      const newFriends = req.body.friends.filter(
        (friendId) => !profile.friends.includes(friendId)
      );
      profile.friends.push(...newFriends);
    } else {
      profile = await Profile.findOneAndUpdate(
        { user: req.user._id },
        {
          username: req.body.username,
          bio: req.body.bio,
          species: req.body.species,
          favPlanet: req.body.favPlanet,
        },
        { new: true }
      );
      if (!profile) {
        throw new Error("Profile not found");
      }
    }

    await profile.save();
    res.json(profile);
  } catch (error) {
    console.log(`Failed to retrieve/update user's profile:`, error);
    res.status(500).send("Internal Server Error");
  }
}

async function getProfile(req, res) {
  try {
    console.log("Hit getProfile controller");
    const userId = req.params.id;

    // If the ID in the params matches the logged-in user's ID or no ID is provided in the params
    if (!userId || userId === req.user._id.toString()) {
      const profile = await Profile.findOne({ user: req.user._id });
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
    console.error(err);
    res.status(500).send("Error fetching profile");
  }
}
// async function getProfile(req, res) {
//   console.log("Hit getProfile controller");
//   const userId = req.params.id;
//   const profile = await Profile.findOne({ user: req.user._id });

//   if (userId === req.user._id) {
//     try {
//       res.json(profile);
//     } catch {
//       console.log(`Failed to retrieve user's profile`);
//     }
//   } else {
//     Profile.findById(userId)
//       .then((profile) => {
//         if (!profile) {
//           return res.status(404).send("Profile not found");
//         }
//         res.send(profile);
//         console.log(profile);
//       })
//       .catch((err) => {
//         console.error(err);
//         res.status(500).send("Error fetching profile");
//       });
//   }
// }
async function createProfile(req, res) {
  console.log("Hit createProfile controller");
  try {
    const profile = new Profile({
      user: req.user._id,
      username: "Earthling",
    });
    await profile.save();
    console.log(profile);
    res.json(profile);
  } catch {
    console.log(`Failed to create user's profile`);
  }
}
