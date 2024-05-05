import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Orders = () => {
  const toys = useLoaderData();
  const { person } = useContext(AuthContext);
  const { _id, name, price, img } = toys;
  const placeOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const c_name = form.name.value;
    const address = form.address.value;
    const city = form.city.value;
    const phone = form.phone.value;
    const deliveryInfo = {
      c_name,
      address,
      city,
      phone,
      email: person.email,
      productName: name,
      productPrice: price,
      productImg: img,
      productId: _id,
    };
    fetch("https://toys-store-js-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(deliveryInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Good job!",
          text: "Order Placed Successfully!",
          icon: "success",
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex gap-8 justify-center mb-4">
      <div>
        <h1 className="text-4xl font-bold m-3 text-warning">{name}</h1>
        <p className="text-2xl font-bold text-white m-5">Price:${price}</p>
        <img className="rounded" src={img} alt="" />
      </div>
      <div>
        <h1 className="font-bold text-3xl text-warning">Delivery Address</h1>
        <form onSubmit={placeOrder}>
          <label className="form-control mb-5 w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your name?</span>
            </div>
            <input
              type="text"
              name="name"
              defaultValue={person.displayName}
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control mb-5 w-full max-w-xs">
            <div className="label">
              <span className="label-text">Address</span>
            </div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <label className="form-control mb-5 w-full max-w-xs">
              <div className="label">
                <span className="label-text">City</span>
              </div>
              <input
                type="text"
                name="city"
                required
                placeholder="City"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control mb-5 w-full max-w-xs">
              <div className="label">
                <span className="label-text">Phone Number</span>
              </div>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <input
            className="btn btn-block btn-warning"
            type="submit"
            value="Place Order"
          />
        </form>
      </div>
    </div>
  );
};

export default Orders;
