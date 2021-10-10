import React, { useState, useEffect } from "react";

import MediaCard from "./MediaCard";
import tmdbApi from 'api/tmdb';

function MediaSlider({ mediaType, title, path, params = {}, isLarge }) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const json = await tmdbApi.get(path, params);
      setItems(json.results);
      // console.log(json)
    }
    fetchData();
  }, [params, path])

  return (
    <div className="media-clider">
      <h3 className="media-slider__title">
        {title}
      </h3>
      <div className="media-slider__cards">
        {
          items.map((media) => {
            return (
              <MediaCard 
                key={media.id}
                media={media}
                mediaType={mediaType || media.media_type}
                isLarge={isLarge}
              />
            )
          })
        }

      </div>

    </div>
  );
}

export default MediaSlider;
