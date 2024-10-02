import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white h-[200px] mt-20">
      <p className="text-center">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
