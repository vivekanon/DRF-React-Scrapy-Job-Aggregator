import React, { useContext } from "react";
import { FetchContext } from "../../store/fetch";
import { Container } from '../shared/container'
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
        {console.log(jobs)}
      </div>
    </Container>
  );
}

export function JobRow(props) {
  return (
    <div className="flex lg:flex-no-wrap bg-white flex-wrap w-full border-2 rounded p-4 text-truncate mt-1 mb-1 button-hover-scale hover:border-green-400 hover:shadow">
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
        <div className="lg:w-2/5 w-1/2 flex justify-between items-center mt-2">
          <p className="text-xs font-semibold">Source:</p>
          <button className="px-4 py-2 bg-blue-600 text-xs text-white rounded">
            Indeed
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 w-full flex overflow-hidden flex-wrap">
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

      <div className="lg:w-1/4 w-1/2 flex lg:justify-end justify-start items-end mt-2">
        <button className="px-4 py-2 text-xs bg-green-400 text-white border rounded m-1">
          Apply
        </button>
      </div>
    </div>
  );
}
