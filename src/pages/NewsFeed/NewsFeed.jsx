import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=Ru1yrcy7V4qAWtIjDvfGCWfsRUPaEusNkNU6Y2NY"
        );
        setApodData(response.data);
      } catch (error) {
        console.error("Error fetching APOD data: ", error);
      }
    };

    fetchApodData();
  }, []);

  if (!apodData) return <div className="div-text">Loading...</div>;

  const backgroundStyle = {
    backgroundImage: `url(${apodData.url})`,
    backgroundSize: "cover", // Optional: Set how the background image should be sized
    backgroundPosition: "center", // Optional: Set the position of the background image
    height: "70vh", // Set a height for the element
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  const containerStyle = {
    height: "100vh", // Set a height for the element
    width: "100%",
    display: "flex",

    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div id="news-feed-container" style={containerStyle}>
      <h2>ASTRONOMY PICTURE OF THE DAY</h2>
      <div style={backgroundStyle}></div>\{" "}
    </div>
  );
};

export default NewsFeed;
