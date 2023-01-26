import React from "react";
import "../Styles/Home.css";
import { HomePageCarouselOne } from "../Components/HomePageComponents/HomePageCarouselOne";
import { HomePageSection2 } from "../Components/HomePageComponents/HomePageSection2";
import { HomePageSection3 } from "../Components/HomePageComponents/HomePageSection3";
import { HomePageSection4 } from "../Components/HomePageComponents/HomePageSection4";
import { HomePageSection33 } from "../Components/HomePageComponents/HomePageSection33";
import { HomePageSection5 } from "../Components/HomePageComponents/HomePageSection5";
import { HomePageSection6 } from "../Components/HomePageComponents/HomePageSection6";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="HomeContainer">
      <section className="section1">
        <HomePageCarouselOne />
      </section>
      <section>
        <HomePageSection2 />
      </section>
      <section className="section3_largeScreen">
        <HomePageSection3 />
      </section>
      <section className="section3_mediumScreen">
        <HomePageSection33 />
      </section>
      <section>
        <HomePageSection4 />
      </section>
      <section>
        <HomePageSection5 />
      </section>
      <section className="section6_largeScreen">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="red.500"
          padding="2%"
          fontSize="150%"
          fontWeight="bold"
        >
          Beauty Products
        </Box>
        <HomePageSection6 />
      </section>
      <section className="section3_mediumScreen"></section>
    </div>
  );
};

export { Home };
