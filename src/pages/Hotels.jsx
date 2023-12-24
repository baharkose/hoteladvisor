import React from "react";
import HotelCard from "../components/HotelCard";

const Hotels = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {arr.map((item, i) => (
            <HotelCard key={i} id={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hotels;
