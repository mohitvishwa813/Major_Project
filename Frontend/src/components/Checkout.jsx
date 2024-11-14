// import React from 'react';
import axios from "axios";

const Checkout = ({ title, price }) => {
  const handlePayment = async () => {
    const data = {
      name: title,
      mobileNumber: 1234567890,
      amount: price,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/payment/create-order",
        data
      );
      console.log(response.data);
      window.location.href = response.data.url;
    } catch (error) {
      console.log("error in payment", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-fit">
      <button
        onClick={handlePayment}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;
