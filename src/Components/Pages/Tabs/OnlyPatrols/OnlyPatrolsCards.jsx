import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const OnlyPatrolsCards = ({ patrol }) => {
  const {_id, name, price, img, description, rating } = patrol;
  return (
    <div className="m-5">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-72 h-72" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h3 className="text-start font-bold ">Price:${price}</h3>
          <p className="text-start">{description}</p>
          <Rating
            className="w-24"
            style={{ maxWidth: 180 }}
            value={rating}
            readOnly
          />
          <div className="card-actions justify-end">
          <Link to={`/details/${_id}`} className="btn btn-warning">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlyPatrolsCards;
