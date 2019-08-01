import React from 'react'

export function Card(props) {
  return (

    <div className="flex flex-col bg-white hover:bg-indigo-600 justify-between flex-grow lg:w-1/5 md:w-1/3 w-full rounded-lg text-truncate m-2 job-card card card-shadow transform p-2">
      <div className="flex flex-wrap w-full p-4  justify-between">
        <div className="w-full flex items-center mb-2">
          <img
            className="h-12 rounded-lg border-2 border-grey-100 oveflow-hidden"
            src="http://placehold.jp/300x300.png"
            alt="logo"
            onClick={()=> console.log(props.id)}
          />
          
        </div>

        <div className="lg:w-full flex flex-wrap items-center ">
          <div className="w-full">
            <p className="font-semibold">{props.title}</p>
          </div>
          <div className="w-full">
            <p className="text-xs">{props.title}</p>
          </div>
          <div className="w-full mt-4 mb-4">
            <p className="text-xs font-semibold">City, state</p>
          </div>
          <div className="w-full">
            <p className="text-xs font-semibold">{props.date}</p>
          </div>
          
        </div>

        <div className="w-full flex flex-shrink flex-wrap">
          <div className="w-full flex flex-shrink items-end justify-around mt-2">
            <button className="px-2 py-2 text-xs border rounded m-1 bg-white">
              Language
            </button>
            <button className="px-2 py-2 text-xs border rounded m-1 bg-white">
              Language
            </button>
            <button className="px-2 py-2 text-xs border rounded m-1 bg-white">
              Language
            </button>
           
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-grow w-full justify-between">
        <button className="h-full bg-indigo-50 flex justify-center items-center rounded-lg w-1/2 py-3">
          <p className="text-xs font-semibold text-indigo-600">Apply</p>
        </button>
        <button className="h-full flex justify-center items-center rounded-lg w-1/2 py-3">
          <p className="text-xs  font-semibold text-indigo-600">More Info</p>
        </button>
      </div>
    </div>

  );
}
