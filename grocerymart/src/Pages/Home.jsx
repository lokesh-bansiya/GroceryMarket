import React from "react";
import "../Styles/Home.css";
import { CarouselOne } from "../Components/Carousel";
import Slider from "../Components/Slider";

const Home = () => {
    return (
        <div className="HomeContainer">
                {/* <Slider/> */}
            <CarouselOne/>
        </div>
    );
};

export {Home}