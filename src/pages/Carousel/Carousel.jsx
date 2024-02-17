 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Slider = () => {
    return (
        
        <Carousel autoPlay = {true} infiniteLoop={true} swipeable={true}>
                <div>
                    <img src="../../../public/avengers.jpg" className=" rounded-2xl"/>
                </div>
                <div>
                    <img src="../../../public/dedpol.jpg" className=" rounded-2xl"/>
                </div>
                <div>
                    <img src="../../../public/imdb.jpg" className=" rounded-2xl"/>
                </div>
                <div>
                    <img src="../../../public/movie2.jpg" className=" rounded-2xl"/>
                </div>
                <div>
                    <img src="../../../public/spider.jpg" className=" rounded-2xl"/>
                </div>
            </Carousel>
    );
};

export default Slider;