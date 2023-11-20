import "./ProfileEditPage.css";
import { useState } from "react";
//import { useHistory } from "react-router-dom";
import {update} from "../../utilities/profiles-api";

//if profile is already populated them show that as value
export default function ProfileEditPage({myProfile, setMyProfile}) {
  //const history = useHistory();
  //const [formData, setFormData] = useState(myProfile);
  const [formData, setFormData] = useState({
    username: myProfile[0].username,
    species: myProfile[0].species ? myProfile[0].species : "",
    favoritePlanet: myProfile[0].favoritePlanet ? myProfile[0].favoritePlanet : "mercury",
    bio: myProfile[0].bio ? myProfile[0].bio : ""
  });
  function handleChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
    //console.log(newFormData);
  }
  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    console.log("sent to utilities");
    const submitRes = await update(formData);
    console.log(submitRes);
    console.log("send back to user's profile page");
    //history.push('/profiles/:id');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id="photo-container-edit-page">insert photo div</div>

        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="species">Species:</label>
          <input
            type="text"
            id="species"
            name="species"
            autoComplete="off"
            value={formData.species}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="favoritePlanet">Favorite Planet:</label>
          <select
            id="favoritePlanet"
            name="favPlanet"
            value={formData.favPlanet}
            onChange={handleChange}
          >
            <option value="mercury">Mercury</option>
            <option value="venus">Venus</option>
            <option value="earth">Earth</option>
            <option value="mars">Mars</option>
            <option value="jupiter">Jupiter</option>
            <option value="saturn">Saturn</option>
            <option value="uranus">Uranus</option>
            <option value="neptune">Neptune</option>
            <option value="pluto">Pluto</option>
          </select>
        </div>

        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
