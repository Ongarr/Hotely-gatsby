import React from "react";

export const FindHotel = () => {
  return (
    <section id="find-hotel" className="container py-48">
      <div className="font-bold text-h3 mb-12 tracking-wide text-center">
        Find your best hotel
      </div>
      <div className="text-grey tracking-wider leading-8 max-w-2xl text-center m-auto">
        Ullamcorper cras imperdiet eu feugiat viverra pulvinar. Gravida integer
        tincidunt pretium dis fames porttitor velit. Volutpat tincidunt
        <button
          className="m-auto mt-8 block bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          View All
        </button>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="border-solid border-2 border-gray-100 rounded-lg">
          <div className=""></div>
          <div className="p-8">
            <div className="font-extrabold text-h6">Hotel De’Luna</div>
            <div className="text-grey">Singapore</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindHotel;
