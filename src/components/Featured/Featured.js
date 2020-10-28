import React from "react";

const Featured = () => {
  return (
    <section id="featured" className="container">
      <div className="featured__wrapper rounded-xl transform md:-translate-y-1/2 py-8 md:py-20 flex flex-col md:flex-row items-center bg-softergreen relative">
        <div className="w-full lg:w-1/6 flex items-center justify-center">
          <img src="/img/icons/ICON.png" alt="small icon of heart"></img>
        </div>
        <div className="w-full lg:w-2/6 px-10 lg:px-0 font-bold text-softgreen text-center md:text-left">
          <h3>Take less than 1 Minutes to book a room</h3>
        </div>
        <div className="w-full lg:w-3/6 px-10 leading-8 text-softgreen text-center md:text-left">
          <p>
            Suspendisse tristique porttitor vel iaculis iaculis nec imperdiet.
            Senectus risus nisi, eget vel sit faucibus praesent netus. Ut velit
            pellent porttitor vel iaculis iaculis
          </p>
        </div>
      </div>
    </section>
  );
};
export default Featured;
