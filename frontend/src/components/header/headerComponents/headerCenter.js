import React from "react";

export default function HeaderCenter() {
  return (
    <div className="h-full lg:flex md:flex sm:flex items-center align-start text-left w-3/5 justify-between hidden">
      <div className="lg:w-1/2 flex w-full">
        <div className="w-1/3 flex">
          <p className="lg:text-sm text-xs font-semibold text-indigo-600">
            About
          </p>
        </div>
        <div className="w-1/3">
          <p className="lg:text-sm text-xs font-semibold text-indigo-600">Docs</p>
        </div>
        <div className="w-1/3">
          <p className="lg:text-sm text-xs font-semibold text-indigo-600">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
}
