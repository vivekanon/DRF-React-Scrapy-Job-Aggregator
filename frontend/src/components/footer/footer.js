import React from "react";
import "../misc/reuseable.css";

function Footer() {
  return (
    <footer className="flex justify-end bg-white pt-32 pb-12  relative">
      <div className="flex lg:flex-row flex-col justify-between w-4/5 mx-auto p-2 ">
        <div className="flex lg:w-1/4 w-full  flex-wrap">
          <div className="flex">
            <h2 className="font-semibold text-indigo-600 text-md underline">
              ACME CO.
            </h2>
          </div>
          <div className="flex mt-6">
            <p className="font-semibold text-indigo-600 text-xs leading-loose">
              ACME CO. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          <div className="flex w-1/2 justify-around items-start mt-10">
            <button className="bg-blue-600-top text-white h-8 w-8">F</button>
            <button className="bg-blue-600-top text-white h-8 w-8">T</button>
            <button className="bg-blue-600-top text-white h-8 w-8">I</button>
          </div>
          <div className="flex mt-10">
            <p className="font-semibold text-indigo-600 text-sm leading-loose">
              Let's Talk:{" "}
              <span className="text-green-light">hello@scrape.io</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:w-1/4 w-full lg:mt-0 mt-10">
          <div className="flex">
            <h2 className="text-indigo-600 text-base uppercase ">
              Submit for updates
            </h2>
          </div>
          <div className="flex flex-col flex-1 justify-around mt-6">
            <p className="text-indigo-600 font-semibold text-xs">
              Subscribe to get updates and notifications about our software and
              products.
            </p>
            <form className="justify-around rounded mt-4 mb-4">
              <input
                className="bg-white border-2 rounded text-base appearance-none w-full py-4 px-3 text-indigo-600 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="email@email.com"
              />
            </form>
            <button className="px-4 py-2 text-xs bg-green-400 text-white border rounded m-1">
              Apply
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
