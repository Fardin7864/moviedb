import Slider from "./Carousel/Carousel";
import FromWatchList from "./FromWatchList/FromWatchList";
import Popular from "./Popular/Popular";
import TvShow from "./TvShow/TvShow";
import UpComming from "./UpComming/UpComming";
import WhatsComing from "./WhatsComing/WhatsComing";

const Browse = () => {
  return (
    <div>
        {/* Hero Section */}
      <div className=" flex lg:flex-row flex-col w-full gap-5">
        <div className=" lg:w-2/3 p-4">
          <Slider />
        </div>
        <div className=" lg:w-1/3">
          <UpComming />
        </div>
      </div>
      {/* Popular Section */}
      <Popular/>
      {/* Explore what's Coming */}
      <WhatsComing/>
      <FromWatchList/>
      <TvShow/>
    </div>
  );
};

export default Browse;
