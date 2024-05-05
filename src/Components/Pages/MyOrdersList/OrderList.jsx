import { FaDeleteLeft } from "react-icons/fa6";

const OrderList = ({ orders }) => {
  const {
    c_name,
    productName,
    productPrice,
    productImg,
    email,
    phone,
    address,
  } = orders;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded  w-32 h-24">
              <img src={productImg} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{productName}</div>
        </div>
      </td>
      <td>$ {productPrice}</td>
      <td>
        <div className="font-bold">{c_name}</div>
        <div className="text-sm opacity-50">{email}</div>
      </td>
      <td>{phone}</td>

      <td>
        <div className="font-bold">{address}</div>
      </td>
      <td>
        <button className="text-red-700">
          <FaDeleteLeft></FaDeleteLeft>
        </button>
      </td>
    </tr>
  );
};

export default OrderList;
