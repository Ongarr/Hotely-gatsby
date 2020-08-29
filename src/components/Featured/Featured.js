import React from "react";

const About = () => {
  return (
    <section id="featured" className="container">
      <div className="featured__wrapper rounded-xl transform -translate-y-1/2 py-20 flex flex-row items-center bg-softergreen relative">
        <div className="w-1/6 flex items-center justify-center">
          <img src="/img/icons/ICON.png" alt="small icon of heart"></img>
        </div>
        <div className="w-2/6 font-bold text-softgreen">
          <h3>Take less than 1 Minutes to book a room</h3>
        </div>
        <div className="w-3/6 pl-10 leading-8 text-softgreen">
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
export default About;
