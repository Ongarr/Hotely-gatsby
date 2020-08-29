import React from "react";

function SearchForm() {
  return (
    <form className="w-full search-form static">
      <div className="w-full wrapper m-auto md:m-0">
        <form className="bg-white rounded-md p-10 mb-4">
          <div className="mb-4 relative">
            <label className="block text-black font-bold mb-2" htmlFor="place">
              Where you go?
            </label>
            <div className="relative">
              <input
                className="appearance-none rounded w-full py-4 px-6 text text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                id="place"
                type="text"
                placeholder='try "Singapore"'
              ></input>
              <div className="absolute inset-y-0 right-0 flex items-center justify-center px-6 text-gray-700">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"
                    stroke="#273029"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 13a3 3 0 100-6 3 3 0 000 6z"
                    stroke="#273029"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block text-black font-bold mb-2"
                htmlFor="check-in"
              >
                Check in
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="check-in"
                type="date"
              ></input>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block text-black font-bold mb-2"
                htmlFor="check-out"
              >
                Check out
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="check-out"
                type="date"
              ></input>
            </div>
          </div>
          <div className="mb-6 md:mb-0 ">
            <label className="block text-black font-bold mb-2" htmlFor="guests">
              Guests
            </label>
            <div className="inline-block relative w-full">
              <select
                className="block relative appearance-none w-full bg-gray-200 text-gray-500 py-4 px-6 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="guests"
                type="dropdown"
              >
                <option>How many guests?</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
                <svg
                  classNameName="fill-current h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 mt-6">
            <label className="flex text-black">
              <input
                className="pay-checkin__checkbox relative mr-2 appearance-none w-6 h-6 bg-softgreen"
                type="checkbox"
              ></input>
              <span className="text">Pay when checking in?</span>
            </label>
          </div>
          <div className="flex items-start justify-start">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white w-full font-bold py-6 px-6 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Search Hotel
            </button>
          </div>
        </form>
      </div>
    </form>
  );
}

export default SearchForm;
