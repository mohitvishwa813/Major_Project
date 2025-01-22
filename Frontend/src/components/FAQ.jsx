import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      className="w-full flex justify-between items-center py-4 px-6 hover:bg-gray-50 transition-colors duration-200"
      onClick={onClick}
    >
      <span className="text-left font-semibold text-gray-800">{question}</span>
      <ChevronDown
        className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
          isOpen ? "transform rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-200 ${
        isOpen ? "max-h-96 py-4" : "max-h-0"
      }`}
    >
      <div className="px-6 text-gray-600 whitespace-pre-line">{answer}</div>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a service?",
      answer:
        "Booking a service is simple! Just follow these steps:\n1. Browse through our available services\n2. Select the service you're interested in\n3. Choose your preferred date and time\n4. Fill in your requirements\n5. Proceed to payment\nOnce confirmed, you'll receive a booking confirmation email with all the details.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods to ensure convenience:\n- Credit/Debit Cards (Visa, MasterCard, American Express)\n- Digital Wallets (PayPal, Google Pay)\n- Bank Transfers\nAll payments are processed securely through our encrypted payment gateway.",
    },
    {
      question: "Can I cancel or reschedule my booking?",
      answer:
        "Yes, you can cancel or reschedule your booking subject to our policies:\n- Free cancellation up to 48 hours before the event\n- Rescheduling available up to 24 hours before the event\n- Contact our customer support for assistance\nPlease note that cancellation fees may apply for last-minute changes.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 min-h-[80vh] flex justify-center items-center">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Still have questions?
            <button className="text-blue-600 font-semibold ml-2 hover:text-blue-800">
              Contact Support
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
