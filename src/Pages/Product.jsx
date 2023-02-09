import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/appReducer/action";
import "../Styles/Products.css";
import { ProductPageCarousel } from "../Components/ProductPageComponents/ProductPageCarousel";
import { Box, Grid, Skeleton, SkeletonText, Select, Text } from "@chakra-ui/react";
import { SingleProductCard } from "../Components/ProductPageComponents/SingleProductCard";
import Footer from "./FooterPage";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.appReducer.allProducts);
  const loading = useSelector((store) => store.appReducer.isLoadingAllProduct);

  const filterHandle = (value) => {
    dispatch(getAllProducts(value))
    console.log(value);
  }

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [products.length, dispatch]);

  if (loading) {
    return (
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
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(4,1fr)",
        }}
        gap="5"
        p="5"
        pt="10%"
      >
        {new Array(20).fill(0).map((e, i) => (
          <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
            <Skeleton size="10" h="180px" />
            <SkeletonText
              w="80%"
              m="auto"
              mb="20px"
              mt="4"
              noOfLines={4}
              spacing="4"
            />
          </Box>
        ))}
      </Grid>
    );
  }


  return (
    <>
      <div className="ProductContainer">
        <section>
          <ProductPageCarousel />
        </section>
        <section>
          <div className="sidebarAtProductPage">
            <Box display="flex" margin="auto" marginTop="0%" width="90%" flexDirection="column">
              <Box>
                <Box fontWeight="bold">Category</Box>
                <Text _hover={{cursor: "pointer", backgroundColor: "gray.200"}} paddingLeft="3%" color="darkgreen" fontWeight="500" onClick={() => filterHandle("vegetable")}>Vegetables</Text>
                <Text _hover={{cursor: "pointer", backgroundColor: "gray.200"}} paddingLeft="3%" color="darkgreen" fontWeight="500" onClick={() => filterHandle("nonveg")}>Non-Veg</Text>
                <Text _hover={{cursor: "pointer", backgroundColor: "gray.200"}} paddingLeft="3%" color="darkgreen" fontWeight="500" onClick={() => filterHandle("bakery")}>Bakery Items</Text>
                <Text _hover={{cursor: "pointer", backgroundColor: "gray.200"}} paddingLeft="3%" color="darkgreen" fontWeight="500" onClick={() => filterHandle("beauty")}>Beauty & Hygiene</Text>
              </Box>
              <Box display="flex" flexDirection="column" justifyContent="left">
                <Box fontWeight="bold" marginTop="7%">Filter</Box>
                <Select
                  placeholder="Price ₹"
                  fontWeight="500"
                  fontSize={{ base: "70%", sm: "70%", md: "70%", lg: "80%", xl: "90%" }}
                  padding="0.1%"
                  onChange={(e) => filterHandle(e.target.value)}
                  _hover={{cursor: "pointer"}}
                >
                  <option value="price_low=300">Below 300</option>
                  <option value="price_low=300&&price_high=400">300 - 400</option>
                  <option value="price_low=400&&price_high=500">400 - 500</option>
                  <option value="price_low=500&&price_high=600">500 - 600</option>
                  <option value="price_low=600&&price_high=700">600 - 700</option>
                  <option value="price_low=700&&price_high=800">700 - 800</option>
                  <option value="price_low=800&&price_high=900">800 - 900</option>
                  <option value="price_low=900&&price_high=1000">900 - 1000</option>
                  <option value="price_high=1000">1000 - Above</option>
                </Select>
                <Select
                  fontWeight="500"
                  fontSize={{ base: "70%", sm: "70%", md: "70%", lg: "80%", xl: "90%" }}
                  padding="0.1%"
                  onChange={(e) => filterHandle(e.target.value)}
                  _hover={{cursor: "pointer"}}
                >
                  <option value="">Popularity</option>
                  <option value="asc" >Price-Low to High</option>
                  <option value="desc"  >Price-High to Low</option>
                </Select>
                <Select
                  fontWeight="500"
                  fontSize={{ base: "70%", sm: "70%", md: "70%", lg: "80%", xl: "90%" }}
                  padding="0.1%"
                  placeholder="Select Brands"
                  onChange={(e) => filterHandle(e.target.value)}
                  _hover={{cursor: "pointer"}}
                >
                  <option value="Fresho">Fresho</option>
                  <option value="Ocean Secret">Ocean Secret</option>
                  <option value="ABHI EGGS">ABHI EGGS</option>
                  <option value="Milky Mist">Milky Mist</option>
                  <option value="Amul">Amul</option>
                  <option value="Nandini">Nandini</option>
                  <option value="Britannia">Britannia</option>
                  <option value="Gillette">Gillette</option>
                  <option value="Margo">Margo</option>
                  <option value="Vaseline">Vaseline</option>
                  <option value="Oral-B">Oral-B</option>
                  <option value="Prasuma">Prasuma</option>
                  <option value="Pears">Pears</option>
                  <option value="Hamam">Hamam</option>
                  <option value="Mother Dairy">Mother Dairy</option>
                  <option value="Nestle">Nestle</option>
                  <option value="iD Fresho">iD Fresho</option>
                  <option value="Nivea">Nivea</option>
                  <option value="STAYFREE">STAYFREE</option>
                  <option value="Mysore Sandal">Mysore Sandal</option>
                  <option value="Sensodyne">Sensodyne</option>
                  <option value="Cinthol">Cinthol</option>
                  <option value="Colgate">Colgate</option>
                  <option value="Dettol">Dettol</option>
                  <option value="Sunsilk">Sunsilk</option>
                  <option value="Loreal Paris">Loreal Paris</option>
                  <option value="Ponds">Ponds</option>
                  <option value="Medimix">Medimix</option>
                </Select>
              </Box>
            </Box>
          </div>
          {
            products.length !== 0 &&
            <div className="mainBoxAtProductPage">
              {
                products.map((ele) => {
                  return (
                    <SingleProductCard
                      key={ele._id}
                      id={ele._id}
                      brand={ele.brand}
                      name={ele.name}
                      mrp={ele.mrp}
                      price={ele.price}
                      quantity={ele.quantity}
                      weight={ele.weight}
                      category={ele.category}
                      ImgSrc={ele.ImgSrc}
                      sasta={ele.sasta}
                      packet={ele.packet}
                      isavailable={ele.isavailable}
                      offers={ele.offers}
                    />
                  );
                })
              }
            </div>
          }
        </section>
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
};

export { Product };