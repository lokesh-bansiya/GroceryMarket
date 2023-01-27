import { Image } from "@chakra-ui/react";
import "../../Styles/ProductPageStyles/SingleProductCard.css";
import cart from "../../Assets/trollyForCard.png";

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
  return (
    <div className="SingleProductCardContainer">

      <div className="SPP_Box1">
        <div>
        <Image src={ImgSrc} alt={brand} />
        </div>
        <div>
            {isavailable? <div className="green">⦿</div> : <div className="red">⦿</div>}
        </div>
      </div>
      
      <div className="SPP_Box2">
        <p>{brand} <span>({category})</span></p>
        <p className="overflow">{name}</p>
        <p className="overflow">{weight}</p>
        <p>{packet}</p>
        <p>{sasta}</p>
      </div>

      <div className="SPP_Box3">
        <div>Quan: <span>{quantity}</span></div>
        <div>{offers}</div>
      </div>

      <div className="SPP_Box5">Price: {price} { mrp? <span> MRP: {mrp} </span>: <></>}</div>

      <div className="SPP_Box4">
        <button>Add <Image src={cart} alt="Add"/></button>
      </div>
    </div>
  );
};

export { SingleProductCard };
