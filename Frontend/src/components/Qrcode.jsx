import { useEffect, useState } from "react";
import QRCode from "qrcode";

const Qrcode = ({ upiId = "default-upi-id@upi", title, price }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    // Generate the QR code with the provided UPI ID or the default one
    QRCode.toDataURL(`upi://pay?pa=${upiId}`)
      .then((url) => {
        setQrCodeUrl(url); // Set the generated QR code URL to the state
      })
      .catch((err) => {
        console.error("Error generating QR code:", err);
      });
  }, [upiId]);

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="w-[500px] h-[400px] bg-[#bfbfbf] shadow-lg rounded-lg flex flex-col items-center justify-center z-40">
        <h2 className="text-xl font-semibold mb-4">Scan to Pay</h2>
        {qrCodeUrl ? (
          <div className="w-[300px] h-[300px]">
            <h1 className="w-full flex justify-center text-[#0009bc] text-[18px] font-[500]">
              {" "}
              {title}
            </h1>
            <img
              src={qrCodeUrl}
              alt="QR Code for UPI Payment"
              className="w-full "
            />
            <div className="w-full flex justify-center text-[20px] font-[400] py-10">
              {" "}
              <h1 className="w-fit px-5 py-1 rounded-3xl text-white bg-black">
                {price}
              </h1>
            </div>
            {}
          </div>
        ) : (
          <p>Loading QR Code...</p>
        )}
      </div>
    </div>
  );
};

export default Qrcode;
