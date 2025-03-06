import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { FaCommentAlt, FaPhoneAlt } from "react-icons/fa";
import Modal from "react-modal";
// import Qrcode from "./Qrcode";
import Checkout from "./Checkout";
import Navbar from "./Navbar";
import StayUpdated from "./StayUpdated";
import Footer from "./Footer";
const reviews = [
  {
    id: 1,
    rating: 5,
    date: "12/15/2021",
    title: "Great ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eveniet ullam a sed quas repudiandae tempora iure provident? Laudantium eos quod officiis dolor tempore error nam obcaecati ratione aliquam voluptas.",
    author: "MJLantz",
    source: "underarmour.com",
  },
  {
    id: 2,
    rating: 5,
    date: "12/15/2021",
    title: "GOOD EVENT",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eveniet ullam a sed quas repudiandae tempora iure provident? Laudantium eos quod officiis dolor tempore error nam obcaecati ratione aliquam voluptas....",
    author: "MJLantz",
    source: "underarmour.com",
  },
  {
    id: 3,
    rating: 3,
    date: "12/15/2021",
    title: "well and Good",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eveniet ullam a sed quas repudiandae tempora iure provident? Laudantium eos quod officiis dolor tempore error nam obcaecati ratione aliquam voluptas.",
    author: "MJLantz",
    source: "underarmour.com",
  },
];

const Postdetails = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("id");

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isQrCodeModalOpen, setIsQrCodeModalOpen] = useState(false); // QR code modal state
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedDates, setBookedDates] = useState(generateRandomBookedDates());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const fetchServiceDetails = async () => {
      if (!id) {
        setError("Service ID is required");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://major-project9144.onrender.com/d/postdetails?id=${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch service details");
        }
        const data = await response.json();
        setService(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [id]);

  function generateRandomBookedDates() {
    let booked = new Set();
    while (booked.size < 6) {
      booked.add(Math.floor(Math.random() * 30) + 1);
    }
    return [...booked];
  }

  const handleDateSelect = (day) => {
    if (!bookedDates.includes(day)) {
      setSelectedDate(day);
    }
  };

  const handleBookNowClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmBooking = () => {
    if (selectedDate && !bookedDates.includes(selectedDate)) {
      setBookedDates((prev) => [...prev, selectedDate]);
    }
    setIsModalOpen(false);
    // setIsQrCodeModalOpen(true); // Open QR code modal on confirm
    setSelectedDate(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDate(null);
  };

  // const handleCloseQrCodeModal = () => {
  //   setIsQrCodeModalOpen(false);
  // };

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const getDaysInCurrentMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!service) return <div>Service not found</div>;

  return (
    <>
      <Navbar />
      <div className="bg-[#eaeaea]">
        <div className="container mx-auto  flex justify-center px-[10%] flex-col gap-y-3">
          <div className="shadow-lg rounded-lg p-6  w-full flex flex-col">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[400px] rounded-lg mt-4"
            />
            <h1 className="text-3xl font-bold">{service.title}</h1>
            <p className="mt-4">{service.description}</p>
            <p className="mt-4">Price: Rs {service.price}</p>
            <p className="mt-4">Category: {service.category}</p>
            <p className="mt-4">Location: {service.location}</p>
          </div>

          <div className="flex space-x-4 mt-6 w-full mb-20">
            <button
              onClick={handleBookNowClick}
              className="flex items-center bg-purple-500 text-white rounded-lg p-2 hover:bg-purple-600 transition"
            >
              Book Now
            </button>
            <button className="flex items-center bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition">
              <FaCommentAlt className="mr-2" /> Chat
            </button>
            <button className="flex items-center bg-green-500 text-white rounded-lg p-2 hover:bg-green-600 transition">
              <FaPhoneAlt className="mr-2" /> Call
            </button>
          </div>

          {/* Booking Date Selection Modal */}
          <div className="flex justify-center items-center">
            <Modal
              isOpen={isModalOpen}
              onRequestClose={handleCloseModal}
              style={{
                content: {
                  maxWidth: "700px",
                  margin: "auto",
                  padding: "20px",
                  maxHeight: "600px",
                },
                overlay: {
                  backgroundColor: "rgba(0,0,0,0.75)",
                },
              }}
            >
              <h2>Select a Date</h2>

              <div className="flex justify-between mb-4">
                <button onClick={goToPreviousMonth}>&lt; Previous</button>
                <span>
                  {currentMonth.toLocaleString("default", { month: "long" })}{" "}
                  {currentMonth.getFullYear()}
                </span>
                <button onClick={goToNextMonth}>Next &gt;</button>
              </div>

              <div className="grid grid-cols-7 gap-4">
                {[...Array(getDaysInCurrentMonth())].map((_, index) => {
                  const day = index + 1;
                  const isBooked = bookedDates.includes(day);
                  const isSelected = selectedDate === day;

                  return (
                    <button
                      key={day}
                      onClick={() => handleDateSelect(day)}
                      className={`w-full h-[50px] ${
                        isBooked
                          ? "bg-red-500"
                          : isSelected
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      } text-white rounded`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {selectedDate && (
                <div className="mt-4">
                  <button
                    onClick={handleConfirmBooking}
                    className="bg-orange-500 text-white p-2 rounded h-fit w-fit"
                  >
                    <Checkout price={service.price} title={service.title} />
                  </button>
                </div>
              )}

              <button
                onClick={handleCloseModal}
                className="mt-4 bg-gray-500 text-white p-2 rounded"
              >
                Close
              </button>
              <div></div>
            </Modal>
          </div>

          {/* QR Code Modal */}
          {/* <Modal
          isOpen={isQrCodeModalOpen}
          onRequestClose={handleCloseQrCodeModal}
          style={{
            content: {
              maxWidth: "400px",
              margin: "auto",
              padding: "20px",
            },
            overlay: {
              backgroundColor: "rgba(0,0,0,0.75)",
            },
          }}
        >
          <button
            onClick={handleCloseQrCodeModal}
            className="mt-4 bg-gray-500 text-white p-2 rounded"
          >
            Close
          </button>
        </Modal> */}
        </div>
      </div>
      <div className=" justify-center  gap-4 flex flex-wrap shadow-lg rounded-2xl p-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-[1px]  border-[#898787] p-5 rounded-xl md:w-[30%]"
          >
            {/* Rating and Date */}
            <div className="flex justify-between items-center text-gray-600 text-sm">
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="flex items-center space-x-1">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>{review.date}</span>
              </div>
            </div>

            {/* Review Content */}
            <h3 className="font-semibold text-lg mt-2">{review.title}</h3>
            <p className="text-gray-700 mt-2 text-sm">
              {review.content}{" "}
              <span className="text-blue-500 cursor-pointer">See more</span>
            </p>

            {/* Reviewer Info */}
            <div className="mt-4 text-gray-600 text-sm">
              <p className="font-semibold">{review.author}</p>
              <p>
                Written by a{" "}
                <span className="font-semibold text-black">
                  {review.source}
                </span>{" "}
                customer
              </p>
            </div>
          </div>
        ))}
      </div>

      <StayUpdated />
      <Footer />
    </>
  );
};

export default Postdetails;
