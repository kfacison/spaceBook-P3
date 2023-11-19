import "./ProfileEditPage.css";
import { useState } from "react";
//import { useHistory } from "react-router-dom";
import {update} from "../../utilities/profiles-api";

//if profile is already populated them show that as value
export default function App() {
  //const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    favoritePlanet: "mercury",
    bio: ""
  });
  function handleChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
    //console.log(newFormData);
  }
  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    console.log("sent to uttilities");
    const submitRes = await update(formData);
    console.log("send back to user's profile page");
    //history.push('/profiles/:id');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id="photo-container-edit-page">insert photo div</div>

        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            autoComplete="off"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="favoritePlanet">Favorite Planet:</label>
          <select
            id="favoritePlanet"
            name="favoritePlanet"
            value={formData.favoritePlanet}
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
