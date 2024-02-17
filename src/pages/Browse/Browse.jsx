import Slider from "./Carousel/Carousel";
import Popular from "./Popular/Popular";
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
    </div>
  );
};

export default Browse;
