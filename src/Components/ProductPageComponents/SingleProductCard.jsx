import { Box, Image, useToast } from "@chakra-ui/react";
import "../../Styles/ProductPageStyles/SingleProductCard.css";
import cart from "../../Assets/trollyForCard.png";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../Redux/cartReducer/action";
import { Link } from "react-router-dom";

const SingleProductCard = ({
  id,
  brand,
  name,
  mrp,
  price,
  quantity,
  weight,
  category,
  ImgSrc,
  sasta,
  packet,
  isavailable,
  offers,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const addToCart = (id) => {
    const payload = {
      brand,
      name,
      weight,
      price,
      mrp,
      ImgSrc,
      category,
      sasta,
      packet,
      offers,
      isavailable,
      quantity,
    }
    dispatch(addProductToCart(payload)).then(() => {
      const timer = setTimeout(() => {
        var msg = localStorage.getItem("msg");
        if (!msg) {
          msg = "Something went wrong!";
        }
        toast({
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
          render: () => (
            <Box
              border="2px solid green"
              textAlign="center"
              borderRadius="10px"
              fontWeight="bolder"
              color="white"
              p={3}
              bg="blue.500"
              boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
            >
              {`${msg}`}
            </Box>
          ),
        });
      }, 3000);
      return () => clearTimeout(timer);
    });
  };
  return (
    <div className="SingleProductCardContainer">
      <div className="SPP_Box1">
        <div>
          <Link to={`/single_product_page/${id}`}>
            {" "}
            <Image src={ImgSrc} alt={brand} />
          </Link>
        </div>
        <div>
          {isavailable ? (
            <div className="green">⦿</div>
          ) : (
            <div className="red">⦿</div>
          )}
        </div>
      </div>

      <div className="SPP_Box2">
        <p>
          {brand} <span>({category})</span>
        </p>
        <p className="overflow">{name}</p>
        <p className="overflow">{weight}</p>
        <p>{packet}</p>
        <p>{sasta}</p>
      </div>

      <div className="SPP_Box3">
        <div>
          Quan: <span>{quantity}</span>
        </div>
        <div>{offers}</div>
      </div>

      <div className="SPP_Box5">
        Price: ₹{price} {mrp ? <span> MRP: ₹{mrp} </span> : <></>}
      </div>

      <div className="SPP_Box4">
        <button onClick={() => addToCart(id)}>
          Add <Image src={cart} alt="Add" />
        </button>
      </div>
    </div>
  );
};

export { SingleProductCard };
