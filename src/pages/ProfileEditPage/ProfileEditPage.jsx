import "./ProfileEditPage.css";

export default function ProfileEditPage() {
  return (
    <>
      <form>
        <div id="photo-container-edit-page">insert photo div</div>

        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" autoComplete="off" />
        </div>

        <div>
          <label htmlFor="favoritePlanet">Favorite Planet:</label>
          <select id="favoritePlanet" name="favoritePlanet">
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
          <textarea id="bio" name="bio"></textarea>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
