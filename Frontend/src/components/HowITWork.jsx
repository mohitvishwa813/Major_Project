import React from "react";
import {
  Search,
  Users,
  UserCheck,
  MessageSquare,
  Calendar,
} from "lucide-react";

const ProcessStep = ({ icon: Icon, step, title, description, isLast }) => (
  <div className="flex items-start gap-6">
    <div className="flex flex-col items-center">
      <div className="p-4 bg-blue-100 rounded-full">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      {!isLast && <div className="w-0.5 h-16 bg-blue-200 mt-4"></div>}
    </div>
    <div className="flex-1 pb-8">
      <div className="text-sm font-semibold text-blue-600 mb-1">
        Step {step}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Select Services as per Your Requirement",
      description:
        "Browse through a variety of event categories and services tailored to your needs, such as birthdays, weddings, or corporate events.",
    },
    {
      icon: Users,
      title: "Compare Different Organizers",
      description:
        "Evaluate multiple organizers based on their ratings, reviews, and offerings to find the perfect fit.",
    },
    {
      icon: UserCheck,
      title: "Choose the Best Organizer",
      description:
        "Finalize an organizer who matches your preferences, budget, and event requirements.",
    },
    {
      icon: MessageSquare,
      title: "Chat with the Organizer",
      description:
        "Connect directly with the selected organizer to discuss your event details, customization needs, and queries.",
    },
    {
      icon: Calendar,
      title: "Book Services Instantly",
      description:
        "Secure your event by booking the selected service and completing the payment process with ease.",
    },
  ];

  return (
    <div className="bg-[#f6f6f6] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="mt-12">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              step={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
