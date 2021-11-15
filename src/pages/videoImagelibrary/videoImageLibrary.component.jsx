import React, { useEffect, useState } from "react";
import VideoImageCard from "../../components/videoImageCard/videoImageCard.component";

import "./videoImageLibrary.css";

const VideoImageLibrary = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState({});
  // const [urls, setUrls] = useState({});

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
        return jsonData.collection.items.length > 4
          ? jsonData.collection.items.slice(0, 5)
          : jsonData.collection.items;
      }
    } catch (error) {
      console.log("data fetch error");
    }
  };

  // const fetchImage = async (list) => {
  //   let links = [];
  //   try {
  //     if (list !== undefined && list !== "") {
  //       list.map(async (item) => {
  //         const fetchedImage = await fetch(`${item.href}`);
  //         const jsonData = await fetchedImage.json();
  //         links.push(jsonData[0]);
  //       });
  //       return links;
  //     }
  //   } catch (error) {
  //     console.log("fetchImage failed !");
  //   }
  // };

  useEffect(() => {
    const fetchAPI = async () => {
      const list = await fetchData(searchText);
      setData(list);
      // const links = await fetchImage(list);
      // setUrls(links);
      // if (data !== undefined && data.length > 0) {
      //   if (urls !== undefined && urls.length === 5) {
      //     data.map((item, i) => {
      //       urls.map((url, j) => {
      //         if (i === j) {
      //           return (item = { ...item, href: url });
      //         }
      //       });
      //     });
      //   }
      // }
    };
    fetchAPI();
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
        <div className="placeholder">Empty here...</div>
      )}
    </div>
  );
};

export default VideoImageLibrary;
