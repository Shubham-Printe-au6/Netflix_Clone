import React from 'react';
import Header from "../ui/Header";
import Banner from "../ui/Banner";
import MediaSlider from '../ui/MediaSlider';

function HomeScreen() {
  return (
    <div>
        <Header />
        <Banner />
        <MediaSlider 
         mediaType='tv'
         title='NETFLIX ORIGINALS'
         path='/discover/tv'
         params={{with_network: 213}}
         isLarge 
        />
        <MediaSlider 
          title='Trending Now'
          path='/trending/all/week'
        />
        <MediaSlider 
         mediaType='movie'
         title='Top Rated'
         path='/movie/top_rated'
        />
        <MediaSlider 
         mediaType='movie'
         title='Top Rated'
         path='/movie/top_rated'
        />
        <MediaSlider 
         mediaType='movie'
         title='Action Movies'
         path='/discover/movie'
         params={{with_genre: 28}}
        />
    </div>
  )
}

export default HomeScreen;
