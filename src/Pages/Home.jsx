import React from "react";
import "../Styles/Home.css";
import { HomePageCarouselOne } from "../Components/HomePageComponents/HomePageCarouselOne";
import { HomePageSection2 } from "../Components/HomePageComponents/HomePageSection2";
import { HomePageAllProductsCarousel } from "../Components/HomePageComponents/HomePageAllProductsCarousel";
import { HomePageSection4 } from "../Components/HomePageComponents/HomePageSection4";
import { HomePageSection5 } from "../Components/HomePageComponents/HomePageSection5";
import { HomeCategoryBeauty } from "../Components/HomePageComponents/HomeCategoryBeauty";
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
import { HomeCategoryBakeryForSmallScreen } from "../Components/HomePageComponents/HomeCategoryBakeryForSmallScreen";
import { HomeCategoryBakeryForExtraSmallScreen } from "../Components/HomePageComponents/HomeCategoryBakeryForExtraSmallScreen";
import { HomeCategoryVegetablesForSmallScreen } from "../Components/HomePageComponents/HomeCategoryVegetablesForSmallScreen";
import { HomeCategoryVegetablesForExtraSmallScreen } from "../Components/HomePageComponents/HomeCategoryVegetablesForExtraSmallScreen";
import { HomeCategoryBeautyForExtraSmallScreen } from "../Components/HomePageComponents/HomeCategoryBeautyForExtraSmallScreen";
import { HomeCategoryBeautyForSmallScreen } from "../Components/HomePageComponents/HomeCategoryBeautyForSmallScreen";
import { HomePageAllProductsCarouselForSmallScreen } from "../Components/HomePageComponents/HomePageAllProductsCarouselForSmallScreen";
import { HomePageAllProductsCarouselForExtraSmallScreen } from "../Components/HomePageComponents/HomePageAllProductsCarouselForExtraSmallScreen";

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
          <div
            width="100%"
            padding="5%"
            bg="black"
            boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
          >
            <img
              style={{
                width: "60%",
                margin: "auto",
                borderRadius: "50%",
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
          <Box
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            }}
          >
            <HomePageAllProductsCarousel />
          </Box>
          <Box
            display={{
              base: "none",
              sm: "none",
              md: "block",
              lg: "none",
              xl: "none",
            }}
          >
            <HomePageAllProductsCarouselForSmallScreen />
          </Box>
          <Box
            display={{
              base: "none",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            }}
          >
            <HomePageAllProductsCarouselForExtraSmallScreen />
          </Box>
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

          <Box
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            }}
          >
            <HomeCategoryVegetables />
          </Box>
          <Box
            display={{
              base: "none",
              sm: "none",
              md: "block",
              lg: "none",
              xl: "none",
            }}
          >
            <HomeCategoryVegetablesForSmallScreen />
          </Box>
          <Box
            display={{
              base: "none",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            }}
          >
            <HomeCategoryVegetablesForExtraSmallScreen />
          </Box>
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
          <Box
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            }}
          >
            <HomeCategoryBeauty />
          </Box>
          <Box
            display={{
              base: "none",
              sm: "none",
              md: "block",
              lg: "none",
              xl: "none",
            }}
          >
            <HomeCategoryBeautyForSmallScreen />
          </Box>
          <Box
            display={{
              base: "none",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            }}
          >
            <HomeCategoryBeautyForExtraSmallScreen />
          </Box>
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
          <Box
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            }}
          >
            <HomeCategoryBakery />
          </Box>
          <Box
            display={{
              base: "none",
              sm: "none",
              md: "block",
              lg: "none",
              xl: "none",
            }}
          >
            <HomeCategoryBakeryForSmallScreen />
          </Box>
          <Box
            display={{
              base: "none",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            }}
          >
            <HomeCategoryBakeryForExtraSmallScreen />
          </Box>
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
