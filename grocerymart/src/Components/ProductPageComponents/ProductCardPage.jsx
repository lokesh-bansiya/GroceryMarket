import { Image } from "@chakra-ui/react";
import "../../Styles/HomePageComponentsStyles/HomePageSingleCard.css";
import cart from "../../Assets/trollyForCard.png";

const SingleCardPage = ({
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

  const addToCartHandler = (id) => {
    console.log(id);
  };

  return (
    <div className="SingleProductItemContainer">
      <div className="SPI_Box1">
        <Image src={ImgSrc} alt={brand} />
        <div>
          {isavailable ? (
            <div className="green">⦿</div>
          ) : (
            <div className="red">⦿</div>
          )}
        </div>
      </div>

      <div className="SPI_Box2">
        <p>
          {brand} <span>{category}</span>
        </p>
        <p className="overflow">{name}</p>
        <p>{weight}</p>
        <p>{packet}</p>
        <p>{sasta}</p>
      </div>

      <div className="SPI_Box3">
        <div>
          Quan: <span>{quantity}</span>
        </div>
        <div>{offers}</div>
      </div>

      <div className="SPI_Box5">
        Price: {price} {mrp ? <span> MRP: {mrp} </span> : <></>}
      </div>

      <div className="SPI_Box4">
        <button onClick={() => addToCartHandler(id)}>
          Add <Image src={cart} alt="Add" />
        </button>
      </div>
    </div>
  );
};

export { SingleCardPage };