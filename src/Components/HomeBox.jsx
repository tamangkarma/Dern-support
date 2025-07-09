import React from "react";

const HomeBox = ({ title, Quantity }) => {
  return (
    <div className="h-32 md:h-40 w-full md:w-64 flex flex-col items-center justify-center  rounded-lg shadow-lg bg-white">
      <h1 className="text-xl md:text-3xl  font-bold text-primary">{Quantity}</h1>
      <p className="mt-2 md:text-lg font-medium text-center">{title}</p>
    </div>
  );
};

export default HomeBox;
