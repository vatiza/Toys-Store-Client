import { useEffect, useState } from "react";
import AllToysCards from "./AllToysCards";

const AllToys = () => {
    const [toys,setToys]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    
    return (
        <div>
            <h1>All Toys Comming Soon:{toys.length}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3">
            {
                toys.map(toy=><AllToysCards key={toy._id}
                toy={toy}
                ></AllToysCards>)
            }
        </div>

        </div>
    );
};

export default AllToys;