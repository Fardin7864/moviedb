 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Slider = () => {
    return (
        
        <Carousel autoPlay = {true} infiniteLoop={true} swipeable={true}>
                <div>
                    <img src={'https://i.ibb.co/2j0ZTPc/imdb.jpg'} className=" rounded-2xl"/>
                </div>
                <div>
                    <img src={'https://i.ibb.co/yfmT7KT/movie2.jpg'} className=" rounded-2xl"/>
                </div>
                <div>
                    <img src={"https://i.ibb.co/YQHvL99/spider.jpg"} className=" rounded-2xl"/>
                </div>
                <div>
                    <img src={"https://i.ibb.co/kq4drHM/avengers.jpg"} className=" rounded-2xl"/>
                </div>
                <div>
                    <img src={"https://i.ibb.co/fdkwnpF/dedpol.jpg"} className=" rounded-2xl"/>
                </div>
            </Carousel>
    );
};

export default Slider;