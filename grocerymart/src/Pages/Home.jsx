import React from "react";
import "../Styles/Home.css";
import { HomePageCarouselOne } from "../Components/HomePageComponents/HomePageCarouselOne";
import { HomePageSection2 } from "../Components/HomePageComponents/HomePageSection2";
import { HomePageSection3 } from "../Components/HomePageComponents/HomePageSection3";
import { HomePageSection4 } from "../Components/HomePageComponents/HomePageSection4";
import { HomePageSection33 } from "../Components/HomePageComponents/HomePageSection33";
import { HomePageSection5 } from "../Components/HomePageComponents/HomePageSection5";
import { HomePageSection6 } from "../Components/HomePageComponents/HomePageSection6";
import { Box, Image } from "@chakra-ui/react";
import { HomePageSection7 } from "../Components/HomePageComponents/HomePageSection7";
import { HomePageSection8 } from "../Components/HomePageComponents/HomePageSection8";
import { HomePageSection9 } from "../Components/HomePageComponents/HomePageSection9";
import { HomeCategoryVegetables } from "../Components/HomePageComponents/HomeCategoryVegetables";
import { HomeCategoryBakery } from "../Components/HomePageComponents/HomeCategoryBakery";
import homebanner from "../Assets/homebanner.webp";
import { HomePageSection10 } from "../Components/HomePageComponents/HomePageSection10";
import { HomePageSection11 } from "../Components/HomePageComponents/HomePageSection11";
import { useSelector } from "react-redux";
import loading from "../Assets/loadingforhome.gif";
import error from "../AdminSide/AdminAssets/serverError.gif";
import Footer from "./FooterPage";

const Home = () => {
  const isError = useSelector((store) => store.appReducer.isError);
  const isLoading = useSelector((store) => store.appReducer.isLoading);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            position: "absolute",
            zIndex: "10",
            width: "100%",
            paddingTop: "15%",
          }}
        >
          <div>
            <img
              style={{
                width: "50%",
                margin: "auto",
                marginBottom: "5%",
              }}
              src={loading}
              alt="loading..."
            />
            <h1
              style={{
                fontWeight: "bold",
                color: "black",
                display: "flex",
                justifyContent: "center",
                fontSize: "150%",
                marginTop: "5%",
              }}
            >
              Please wait loading...
            </h1>
          </div>
        </div>
      ) : (
        <></>
      )}

      {isError ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            position: "absolute",
            zIndex: "10",
            width: "100%",
            backgroundColor: "black",
            paddingTop: "5%",
          }}
        >
          <div width="100%" padding="5%" bg="black" boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px">
            <img
              style={{
                width: "60%",
                margin: "auto",
                borderRadius: "50%"
              }}
              src={error}
              alt="Server error...!"
            />
            
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="HomeContainer">
        <section className="section1">
          <HomePageCarouselOne />
        </section>
        <section>
          <HomePageSection2 />
        </section>
        <section>
          <HomePageSection10 />
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
        <section className="section3_largeScreen">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="2%"
            fontSize="120%"
            fontWeight="bold"
            color="gray.600"
          >
            Vegetables
          </Box>
          <HomeCategoryVegetables />
        </section>
        <section>
          <HomePageSection5 />
        </section>
        <section className="section6_largeScreen">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="2%"
            fontSize="120%"
            fontWeight="bold"
            color="gray.600"
          >
            Beauty Products
          </Box>
          <HomePageSection6 />
        </section>
        <section>
          <HomePageSection11 />
        </section>
        <section className="section3_largeScreen">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="2%"
            fontSize="120%"
            fontWeight="bold"
            color="gray.600"
          >
            Bakery Items
          </Box>
          <HomeCategoryBakery />
        </section>
        <section>
          <HomePageSection7 />
        </section>
        <section>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="2%"
            fontSize="120%"
            marginTop={{ base: "10%", sm: "5%", md: "3%", lg: "3%", xl: "3%" }}
            fontWeight="bold"
            color="gray.600"
          >
            Snacks Store/ Cleaning & Household
          </Box>
          <HomePageSection9 />
        </section>
        <section>
          <HomePageSection8 />
        </section>
        <section>
          <Box width="100%" marginTop="5%">
            <Image width="100%" src={homebanner} alt="banner" />
          </Box>
        </section>
      </div>
      <Footer />
    </>
  );
};

export { Home };
