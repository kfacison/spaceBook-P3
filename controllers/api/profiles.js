const Profile = require("../../models/profile");
const User = require("../../models/user");

module.exports = {
  createProfile,
  getProfile,
  update,
  deleteProfile,
  getAll,
};

async function getAll(req, res) {
    console.log("Hit getAll controller")
    // Update later and set limit to 100 profiles
    try{
        const profiles = await Profile.find({});
        // console.log(profiles);
        res.status(200).json(profiles);
    } catch {
        console.log('Failed to retrieve all profiles');
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

// Probably need to update to handle the submitted changes
async function update(req, res) {
  console.log("Hit update controller");
  try {
    let profile;
    if(req.body.friends){
      //best behavor would be to add a spred of friends to add to exising friends
      const update = {friends: req.body.friends}
      profile = await Profile.findOneAndUpdate({ user: req.user._id }, update, {new: true});
    }
    else{

      profile = await Profile.findOneAndUpdate({ user: req.user._id }, {
        username: req.body.username,
        bio: req.body.bio,
        species: req.body.species,
        favPlanet: req.body.favPlanet
      }, {new: true});
    }
    // console.log(update);
    await profile.save();
    res.json(profile);
  } catch {
    console.log(`Failed to retrieve user's profile`);
  }
}

async function getProfile(req, res) {
  console.log("Hit getProfile controller");
  const profile = await Profile.findOne({ user: req.user._id });
  try {
    res.json(profile);
  } catch {
    console.log(`Failed to retrieve user's profile`);
  }
}

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
