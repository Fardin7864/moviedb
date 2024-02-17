import Slider from "./Carousel/Carousel";
import UpComming from "./UpComming/UpComming";

const Browse = () => {
  return (
    <div>
      <div className=" flex lg:flex-row flex-col w-full gap-5">
        <div className=" lg:w-2/3 p-4">
          <Slider />
        </div>
        <div className=" lg:w-1/3">
          <UpComming />
        </div>
      </div>
    </div>
  );
};

export default Browse;
