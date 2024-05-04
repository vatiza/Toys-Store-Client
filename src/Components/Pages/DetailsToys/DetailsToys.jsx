import { Rating } from "@smastrom/react-rating";
import { FaCartPlus } from "react-icons/fa";

import { Link, useLoaderData } from "react-router-dom";

const DetailsToys = () => {
  const toys = useLoaderData();
  const { _id, name, price, img, description, about, rating } = toys;
  console.log(toys);
  return (
    <div className="mt-8">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="mt-5 font-bold text-warning">Price:$ {price}</p>
            <div className="flex gap-2">
              <span className="text-warning"> Rating:</span>
              <Rating
                className="w-24"
                style={{ maxWidth: 180 }}
                value={rating}
                readOnly
              />
            </div>
            <p className="py-6">
              <span className="text-warning">Description:</span> {description}
            </p>
            <p className="py-6">
              <span className="text-warning">About:</span> {about}
            </p>

            <Link to={`/orders/${_id}`} className="btn btn-warning">
              <FaCartPlus /> Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsToys;
