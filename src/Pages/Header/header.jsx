import React from "react";
import img1 from "../../img/img.jpg";

function Header() {
  return (
    <div className="relative w-screen h-60 md:w-full md:h-screen ">
      {/* Background Image */}
      <img
        src={img1}
        alt="me"
        className="w-full h-full object-cover blur-sm absolute inset-0"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex justify-center items-center px-4">
        <div className="border-4 border-white p-6 rounded-lg bg-white bg-opacity-60 text-center max-w-4xl mx-auto">
          <h1 className="text-base md:text-xl lg:text-2xl font-bold text-gray-900">
            Hey there! I am Muhammad. Nice to meet you!
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-gray-700 mt-4">
            A student of Computer Sciences. Currently enrolled in 5th Semester,
            with an aim to enter the data science industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
