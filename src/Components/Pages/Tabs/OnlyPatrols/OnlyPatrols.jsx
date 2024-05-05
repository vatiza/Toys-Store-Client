import { useEffect, useState } from "react";
import OnlyPatrolsCards from "./OnlyPatrolsCards";

const OnlyPatrols = () => {
  const [patrols, setPatrols] = useState([]);
  useEffect(() => {
    fetch("https://toys-store-js-server.vercel.app/patrols")
      .then((res) => res.json())
      .then((data) => setPatrols(data));
  }, []);
  return (
    <div>
      <h1>Totals Patorls Cars:{patrols.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {patrols.map((patrol) => (
          <OnlyPatrolsCards key={patrol._id} patrol={patrol}></OnlyPatrolsCards>
        ))}
      </div>
    </div>
  );
};

export default OnlyPatrols;
