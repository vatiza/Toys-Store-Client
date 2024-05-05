import { useEffect, useState } from "react";
import OnlyTrucksCards from "./OnlyTrucksCards";

const OnlyTrucks = () => {
  const [trucks, setTrucks] = useState([]);
  useEffect(() => {
    fetch("https://toys-store-js-server.vercel.app/trucks")
      .then((res) => res.json())
      .then((data) => setTrucks(data));
  }, []);
  return (
    <div>
      <h2>All Trucks:{trucks.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {trucks.map((truck) => (
          <OnlyTrucksCards key={truck._id} truck={truck}></OnlyTrucksCards>
        ))}
      </div>
    </div>
  );
};

export default OnlyTrucks;
