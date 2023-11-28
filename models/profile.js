const User = require("./user");
const Post = require("./post");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/drobgciba/image/upload/v1701057029/nwwjxxvzxhzgdywbqlsc.png",
    },
    username: {
      type: String,
      required: true,
      default: "Earthling",
    },
    species: String,
    favPlanet: {
      type: String,
      enum: [
        "mercury",
        "venus",
        "earth",
        "mars",
        "jupiter",
        "saturn",
        "uranus",
        "neptune",
        "pluto",
      ],
    },
    bio: {
      type: String,
      maxLength: 500,
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "Profile",
      },
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
