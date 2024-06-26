import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import OrderList from "./OrderList";

const MyOrders = () => {
  const { person } = useContext(AuthContext);
  const [myorders, setMyOrders] = useState([]);
  useEffect(() => {
    const url = `https://toys-store-js-server.vercel.app/orders?email=${person.email}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [person.email]);
  return (
    <div className="mt-8">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-warning text-xl">
            <tr>
              <th>Picture</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myorders.map((orders) => 
              <OrderList key={orders._id} orders={orders}></OrderList>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
