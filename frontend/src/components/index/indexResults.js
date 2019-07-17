import React, { useContext } from "react";
import { FetchContext } from "../../store/fetch";
import { Container } from "../shared/container";
import Loader from "../misc/loader";

export function IndexResults() {
  const { jobs, isLoading, setIsLoading } = useContext(FetchContext);
  const jobList = jobs.jobs.results;
  return (
    <Container>
      <div className="flex flex-col w-5/6 items-start justify-center mx-auto">
        <p className="lg:pl-2 pt-6 pb-6 font-semibold">Latest Jobs</p>
        <div className="w-full flex justify-around flex-wrap mx-auto">
          {jobList ? (
            jobList.map((job, id) => (
              <JobRow key={id} title={job.title} date={job.created_date} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </Container>
  );
}

export function JobRow(props) {
  return (
    <div className="flex flex-col bg-white justify-between flex-grow lg:w-1/3 w-full rounded text-truncate m-2 job-card card card-shadow transform pb-6">
      <div className="flex flex-wrap w-full p-4 ">
        <div className="lg:w-1/6 w-1/2 flex items-center mb-2">
          <img
            className="lg:h-16 h-8"
            src="http://placehold.jp/150x150.png"
            alt="logo"
          />
        </div>

        <div className="lg:w-1/2 flex flex-wrap items-center">
          <div className="w-full">
            <p className="font-semibold">{props.title}</p>
          </div>
          <div className="w-full">
            <p className="text-xs">{props.title}</p>
          </div>
          <div className="w-1/2 mt-4 mb-4">
            <p className="text-xs font-semibold">City, state</p>
          </div>
          <div className="w-1/2">
            <p className="text-xs font-semibold">{props.date}</p>
          </div>
          <div className="lg:w-3/5 w-1/2 flex justify-between items-center mt-2">
            <p className="text-xs font-semibold">Source:</p>
            <button className="px-4 py-2 bg-blue-600 text-xs text-white rounded">
              Indeed
            </button>
          </div>
        </div>

        <div className="w-full flex overflow-hidden flex-wrap">
          <div className="w-full flex flex-wrap items-end justify-between mt-2">
            <button className="px-4 py-2 text-xs border rounded m-1">
              Language
            </button>
            <button className="px-4 py-2 text-xs border rounded m-1">
              Language
            </button>
            <button className="px-4 py-2 text-xs border rounded m-1">
              Language
            </button>
            <button className="px-4 py-2 text-xs border rounded m-1">
              Language
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-grow w-full h-16 -mb-6">
        <button className="w-1/2 h-full bg-indigo-50 flex justify-center items-center border-r border-t-2">
          <p className="font-semibold text-indigo-600">Apply</p>
        </button>
        <button className="w-1/2 h-full bg-indigo-50 flex justify-center items-center border-l border-t-2">
          <p className="font-semibold text-indigo-600">More Info</p>
        </button>
      </div>
    </div>
  );
}
