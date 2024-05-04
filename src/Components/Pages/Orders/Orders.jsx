import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const toys = useLoaderData();
  const { _id, name, price, img } = toys;
  return (
    <div className="flex gap-8 justify-center mb-4">
      <div>
        <h1 className="text-4xl font-bold m-3 text-warning">{name}</h1>
        <p className="text-2xl font-bold text-white m-5">Price:${price}</p>
        <img className="rounded" src={img} alt="" />
      </div>
      <div>
        <h1 className="font-bold text-3xl text-warning">Delivery Address</h1>
        <form>
          <label className="form-control mb-5 w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your name?</span>
            </div>
            <input
              type="text"
              name="name"
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
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <input className="btn btn-block btn-warning" type="submit" value='Place Order'/>
        </form>
      </div>
    </div>
  );
};

export default Orders;
