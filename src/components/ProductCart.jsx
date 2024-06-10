import { Link } from "react-router-dom";

function ProductCart({product}) {
    const {
        title,
        brand,
        availabilityStatus,
        description,
        category,
        thumbnail,
        price,
      } = product;
  return (
    <Link to = "/product">
    <div>
    <h1>{title}</h1>
    <p>${price}</p>
    <img src={thumbnail} alt="" />
    <p>{description}</p>
    <p>{category}</p>
    <p>{brand}</p>
    <h1>{availabilityStatus}</h1>
  </div>
    </Link>
  )
}

export default ProductCart