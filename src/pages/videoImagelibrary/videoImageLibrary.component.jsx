import React, { useEffect, useState } from "react";
import VideoImageCard from "../../components/videoImageCard/videoImageCard.component";
import { MdImageSearch } from "react-icons/md";
import { VscRocket } from "react-icons/vsc";
import { SiNasa } from "react-icons/si";
import { TiTimesOutline } from "react-icons/ti";

import "./videoImageLibrary.css";

const VideoImageLibrary = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const fetchData = async (searchText) => {
    try {
      if (searchText !== "") {
        const fetchedData = await fetch(
          `https://images-api.nasa.gov/search?q=${searchText}`
        );
        const jsonData = await fetchedData.json();
        jsonData.collection.items.length > 4
          ? setData(jsonData.collection.items.slice(0, 5))
          : setData(jsonData.collection.items);
      }
    } catch (error) {
      console.log("data fetch error");
    }
  };

  useEffect(() => {
    fetchData(searchText);
  }, [searchText]);

  return (
    <div>
      <div className="search">
        <input
          type="search"
          value={searchText}
          placeholder="Search..."
          onChange={handleChange}
          className="searchInput"
        />
      </div>

      {data !== undefined && data.length > 0 ? (
        data.map((item, id) => {
          return (
            <div key={id}>
              <VideoImageCard
                description={item.data[0].description}
                location={item.data[0].location}
                nasa_id={item.data[0].nasa_id}
                photographer={item.data[0].photographer}
                title={item.data[0].title}
                href={item.href}
              />
            </div>
          );
        })
      ) : (
        <div className="icons">
          <SiNasa className="searchIcon100x100" />
          <TiTimesOutline className="searchIcon50x50" />
          <MdImageSearch className="searchIcon100x100" />
          <TiTimesOutline className="searchIcon50x50" />
          <VscRocket className="searchIcon100x100" />
        </div>
      )}
    </div>
  );
};

export default VideoImageLibrary;
