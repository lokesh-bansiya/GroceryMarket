import React from "react";
import "../Styles/Home.css";
import { HomePageCarouselOne } from "../Components/HomePageComponents/HomePageCarouselOne";
import { HomePageSection2 } from "../Components/HomePageComponents/HomePageSection2";
import { HomePageAllProductsCarousel } from "../Components/HomePageComponents/HomePageAllProductsCarousel";
import { HomePageSection4 } from "../Components/HomePageComponents/HomePageSection4";
import { HomePageSection5 } from "../Components/HomePageComponents/HomePageSection5";
import { HomeCategoryBeauty } from "../Components/HomePageComponents/HomeCategoryBeauty";
import { Box, Grid, Image, Skeleton, SkeletonText } from "@chakra-ui/react";
import { HomePageSection7 } from "../Components/HomePageComponents/HomePageSection7";
import { HomePageSection8 } from "../Components/HomePageComponents/HomePageSection8";
import { HomePageSection9 } from "../Components/HomePageComponents/HomePageSection9";
import { HomeCategoryVegetables } from "../Components/HomePageComponents/HomeCategoryVegetables";
import { HomeCategoryBakery } from "../Components/HomePageComponents/HomeCategoryBakery";
import homebanner from "../Assets/homebanner.webp";
import { HomePageSection10 } from "../Components/HomePageComponents/HomePageSection10";
import { HomePageSection11 } from "../Components/HomePageComponents/HomePageSection11";
import { useSelector } from "react-redux";
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
  const isLoadingBakery = useSelector((store) => store.appReducer.isLoadingBakery);
  const isLoadingBeauty = useSelector((store) => store.appReducer.isLoadingBeauty);
  const isLoadingVegetables = useSelector((store) => store.appReducer.isLoadingVegetables);
  const isLoadingAllProduct = useSelector((store) => store.appReducer.isLoadingAllProduct);

  return (
    <>
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
          {
            isLoadingAllProduct ? (
              <Grid
                w={{
                  base: "100%",
                  md: "90%",
                  lg: "80%",
                }}
                m="auto"
                templateColumns={{
                  base: "repeat(1,1fr)",
                }}
                gap="2"
                p="2"
              >
                {new Array(1).fill(0).map((e, i) => (
                  <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
                    <Skeleton size="15" h="150px" />
                    <SkeletonText
                      w="80%"
                      m="auto"
                      mb="20px"
                      mt="4"
                      noOfLines={2}
                      spacing="1"
                    />
                  </Box>
                ))}
              </Grid>
            ) : (
              <>
                <HomePageCarouselOne />
              </>
            )
          }
        </section>
        <section>
          {
            isLoadingAllProduct ? (
              <Grid
                w={{
                  base: "100%",
                  md: "90%",
                  lg: "80%",
                }}
                m="auto"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(6,1fr)",
                  lg: "repeat(6,1fr)",
                  xl: "repeat(6,1fr)",
                }}
                gap="2"
                p="2"
              >
                {new Array(6).fill(0).map((e, i) => (
                  <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
                    <Skeleton size="15" h="30px" />
                  </Box>
                ))}
              </Grid>
            ) : (
              <>
                <HomePageSection2 />
              </>
            )
          }
        </section>
        <section>
          {
            isLoadingAllProduct ? (
              <Grid
                w={{
                  base: "100%",
                  md: "90%",
                  lg: "80%",
                }}
                m="auto"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(6,1fr)",
                  lg: "repeat(6,1fr)",
                  xl: "repeat(6,1fr)",
                }}
                gap="2"
                p="2"
              >
                {new Array(6).fill(0).map((e, i) => (
                  <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
                    <Skeleton size="15" h="70px" />
                    <SkeletonText
                      w="80%"
                      m="auto"
                      mb="5px"
                      mt="2"
                      noOfLines={2}
                      spacing="1"
                    />
                  </Box>
                ))}
              </Grid>
            ) : (
              <>
                <HomePageSection10 />
              </>
            )
          }
        </section>
        <section className="section3_largeScreen">
          {
            isLoadingAllProduct ? (
              <Grid
                w={{
                  base: "100%",
                  md: "90%",
                  lg: "80%",
                }}
                m="auto"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(5,1fr)",
                  lg: "repeat(5,1fr)",
                  xl: "repeat(5,1fr)",
                }}
                gap="2"
                p="2"
              >
                {new Array(5).fill(0).map((e, i) => (
                  <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
                    <Skeleton size="15" h="150px" />
                    <SkeletonText
                      w="80%"
                      m="auto"
                      mb="5px"
                      mt="4"
                      noOfLines={3}
                      spacing="1"
                    />
                  </Box>
                ))}
              </Grid>
            ) : (
              <>
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
              </>
            )
          }
        </section>

        <section>
          {
            isLoadingAllProduct ? (
              <Grid
                w={{
                  base: "100%",
                  md: "90%",
                  lg: "80%",
                }}
                m="auto"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(4,1fr)",
                  lg: "repeat(4,1fr)",
                  xl: "repeat(4,1fr)",
                }}
                gap="2"
                p="2"
              >
                {new Array(4).fill(0).map((e, i) => (
                  <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
                    <Skeleton size="15" h="100px" />
                    <SkeletonText
                      w="80%"
                      m="auto"
                      mb="20px"
                      mt="4"
                      noOfLines={2}
                      spacing="1"
                    />
                  </Box>
                ))}
              </Grid>
            ) : (
              <>
                <HomePageSection4 />
              </>
            )
          }

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
          {isLoadingVegetables ? (
            <Grid
              w={{
                base: "100%",
                md: "90%",
                lg: "80%",
              }}
              m="auto"
              templateColumns={{
                base: "repeat(1,1fr)",
                sm: "repeat(2,1fr)",
                md: "repeat(5,1fr)",
                lg: "repeat(5,1fr)",
                xl: "repeat(5,1fr)",
              }}
              gap="2"
              p="2"
            >
              {new Array(5).fill(0).map((e, i) => (
                <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
                  <Skeleton size="15" h="150px" />
                  <SkeletonText
                    w="80%"
                    m="auto"
                    mb="20px"
                    mt="4"
                    noOfLines={5}
                    spacing="1"
                  />
                </Box>
              ))}
            </Grid>
          ) : (
            <>
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
            </>
          )}

        </section>
        <section>
          {
            isLoadingAllProduct ? (
              <Grid
                w={{
                  base: "100%",
                  md: "90%",
                  lg: "80%",
                }}
                m="auto"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(6,1fr)",
                  lg: "repeat(6,1fr)",
                  xl: "repeat(6,1fr)",
                }}
                gap="2"
                p="2"
              >
                {new Array(6).fill(0).map((e, i) => (
                  <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
                    <Skeleton size="15" h="80px" />
                    <SkeletonText
                      w="80%"
                      m="auto"
                      mb="20px"
                      mt="4"
                      noOfLines={3}
                      spacing="1"
                    />
                  </Box>
                ))}
              </Grid>
            ) : (
              <>
                <HomePageSection5 />
              </>
            )
          }

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
          {isLoadingBeauty ? (
            <Grid
              w={{
                base: "100%",
                md: "90%",
                lg: "80%",
              }}
              m="auto"
              templateColumns={{
                base: "repeat(1,1fr)",
                sm: "repeat(2,1fr)",
                md: "repeat(5,1fr)",
                lg: "repeat(5,1fr)",
                xl: "repeat(5,1fr)",
              }}
              gap="2"
              p="2"
            >
              {new Array(5).fill(0).map((e, i) => (
                <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
                  <Skeleton size="15" h="150px" />
                  <SkeletonText
                    w="80%"
                    m="auto"
                    mb="20px"
                    mt="4"
                    noOfLines={5}
                    spacing="1"
                  />
                </Box>
              ))}
            </Grid>
          ) : (
            <>
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
            </>
          )}

        </section>
        <section>
          {
            isLoadingAllProduct ? (
              <Grid
                w={{
                  base: "100%",
                  md: "90%",
                  lg: "80%",
                }}
                m="auto"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(6,1fr)",
                  lg: "repeat(6,1fr)",
                  xl: "repeat(6,1fr)",
                }}
                gap="2"
                p="2"
              >
                {new Array(6).fill(0).map((e, i) => (
                  <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
                    <Skeleton size="15" h="90px" />
                    <SkeletonText
                      w="80%"
                      m="auto"
                      mb="20px"
                      mt="4"
                      noOfLines={3}
                      spacing="1"
                    />
                  </Box>
                ))}
              </Grid>
            ) : (
              <>
                <HomePageSection11 />
              </>
            )
          }

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
          {isLoadingBakery ? (
            <Grid
              w={{
                base: "100%",
                md: "90%",
                lg: "80%",
              }}
              m="auto"
              templateColumns={{
                base: "repeat(1,1fr)",
                sm: "repeat(2,1fr)",
                md: "repeat(5,1fr)",
                lg: "repeat(5,1fr)",
                xl: "repeat(5,1fr)",
              }}
              gap="2"
              p="2"
            >
              {new Array(5).fill(0).map((e, i) => (
                <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
                  <Skeleton size="15" h="150px" />
                  <SkeletonText
                    w="80%"
                    m="auto"
                    mb="20px"
                    mt="4"
                    noOfLines={5}
                    spacing="1"
                  />
                </Box>
              ))}
            </Grid>
          ) : (
            <>
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
            </>
          )}

        </section>
        <section>
          {
            isLoadingAllProduct ? (
              <Grid
                w={{
                  base: "100%",
                  md: "90%",
                  lg: "80%",
                }}
                m="auto"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(6,1fr)",
                  lg: "repeat(6,1fr)",
                  xl: "repeat(6,1fr)",
                }}
                gap="2"
                p="2"
              >
                {new Array(6).fill(0).map((e, i) => (
                  <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
                    <Skeleton size="15" h="90px" />
                    <SkeletonText
                      w="80%"
                      m="auto"
                      mb="20px"
                      mt="4"
                      noOfLines={3}
                      spacing="1"
                    />
                  </Box>
                ))}
              </Grid>
            ) : (
              <>
                <HomePageSection7 />
              </>
            )
          }
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
          {
            isLoadingAllProduct ? (
              <Grid
                w={{
                  base: "100%",
                  md: "90%",
                  lg: "80%",
                }}
                m="auto"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(4,1fr)",
                  lg: "repeat(4,1fr)",
                  xl: "repeat(4,1fr)",
                }}
                gap="2"
                p="2"
              >
                {new Array(4).fill(0).map((e, i) => (
                  <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
                    <Skeleton size="15" h="100px" />
                    <SkeletonText
                      w="80%"
                      m="auto"
                      mb="20px"
                      mt="1"
                      noOfLines={3}
                      spacing="1"
                    />
                  </Box>
                ))}
              </Grid>
            ) : (
              <>
                <HomePageSection9 />
              </>
            )
          }
        </section>
        <section>
          {
            isLoadingAllProduct ? (
              <Grid
                w={{
                  base: "100%",
                  md: "90%",
                  lg: "80%",
                }}
                m="auto"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(6,1fr)",
                  lg: "repeat(6,1fr)",
                  xl: "repeat(6,1fr)",
                }}
                gap="2"
                p="2"
              >
                {new Array(6).fill(0).map((e, i) => (
                  <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
                    <Skeleton size="15" h="80px" />
                    <SkeletonText
                      w="80%"
                      m="auto"
                      mb="20px"
                      mt="1"
                      noOfLines={2}
                      spacing="1"
                    />
                  </Box>
                ))}
              </Grid>
            ) : (
              <>
                <HomePageSection8 />
              </>
            )
          }
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
