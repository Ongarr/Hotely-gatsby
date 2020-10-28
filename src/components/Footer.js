import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer id="footer" className="pb-4 bg-softergreen">
      <div className="container flex flex-wrap flex-col md:flex-row p-20 bg-white transform -translate-y-20 rounded">
        <div className="w-full md:w-7/12">
          <div className="leading-8 w-8/12">
            <div className="font-bold">
              Hote<span className="text-orange-500">ly</span>
            </div>
            <div className="text-grey">
              Nunc, lobortis cras vulputate faucibus dictumst. Viverra sit nec
              pellentesque mattis. Ipsum amet nunc bibendum ut. Aliquam ut lorem{" "}
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/12">
          <div className="flex flex-col">
            <div className="font-bold mb-6">Navigation</div>
            <Link to="/" className="nav-link text-grey py-2">
              Home
            </Link>
            <Link to="/" className="nav-link text-grey py-2">
              Find Hotel
            </Link>
            <Link to="/" className="nav-link text-grey py-2">
              About us
            </Link>
            <Link to="/" className="nav-link text-grey py-2">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="w-full md:w-3/12">
          <div className="flex flex-col">
            <div className="font-bold mb-6">Contact Us</div>
            <a href="tel:+62 123 123981" className="nav-link text-grey py-2">
              +62 123 123981
            </a>
            <a
              href="mailto:info@hotely.com"
              className="nav-link text-grey py-2"
            >
              info@hotely.com
            </a>
            <a href="www.hotely.com" className="nav-link text-grey py-2">
              hotely.com
            </a>
          </div>
        </div>
      </div>
      <div className="container px-0 mt-8 mb-8 flex justify-between">
        <div className="font-bold">All Right Reserved</div>
        <div className="w-24 flex justify-between">
          <img src="/img/social/instagram.svg" alt="insta-social" />
          <img src="/img/social/facebook.svg" alt="facebook-social" />
          <img src="/img/social/twitter.svg" alt="twitter-social" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
