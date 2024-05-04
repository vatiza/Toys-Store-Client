import { useEffect, useState } from "react";
import OnlyCarsCards from "./OnlyCarsCards";

const OnlyCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <h1>All cars:{cars.length}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {cars.map((car) => (
          <OnlyCarsCards key={car._id} car={car}></OnlyCarsCards>
        ))}
      </div>
    </div>
  );
};

export default OnlyCars;
