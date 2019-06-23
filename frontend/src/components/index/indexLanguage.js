import React, { useContext } from "react";
import {
  DiJava,
  DiJsBadge,
  DiAws,
  DiReact,
  DiPython,
  DiRubyRough,
  DiDotnet,
  DiMsqlServer
} from "react-icons/di";
import { FetchContext } from "../../store/fetch";
import axios from "axios";

export function IndexLanguage() {
  return (
    <div className="relative bg-white flex flex-col w-full justify-start lg:mx-auto montserrat">
      <div className="flex flex-col lg:w-3/4 w-5/6 items-start justify-center mx-auto">
        <p className="lg:pl-2 pt-6 pb-6 font-semibold">Popular Skills</p>
        <div className="w-full flex justify-around flex-wrap mx-auto">
          {languages.map((language, id) => (
            <LanguageCard
              languageIcon={language.languageIcon}
              language={language.language}
              key={id}
              bgColor={language.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function LanguageCard(props) {
  const { setJobs } = useContext(FetchContext);
  async function handleClick() {
    await axios
      .get(`http://127.0.0.1:8000/?search=${props.language}`)
      .then(response => setJobs({ jobs: response.data }))
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <>
      <div
        className="lg:w-1/5 md:w-2/5 w-2/5 flex flex-grow rounded border-2 lg:p-6 p-4 lg:m-2 m-1 bg-white botton-hover-y hover:shadow hover:border-green-400 cursor-pointer"
        onClick={handleClick}
      >
        <div className="w-1/2 flex justify-center items-center">
          <p className="text-3xl text-truncate font-semibold">
            {props.languageIcon}
          </p>
        </div>
        <div className="flex flex-wrap flex-grow lg:text-left md:text-left text-right items-start">
          <div className="w-full">
            <p className="lg:text-md text-xs font-semibold text-blue-800">
              {props.language}
            </p>
          </div>
          <div className="w-full">
            <p className="text-xs text-blue-800">1234 Jobs</p>
          </div>
        </div>
      </div>
    </>
  );
}
DiJava, DiJsBadge, DiAws, DiReact, DiPython;
const languages = [
  {
    id: 0,
    languageIcon: <DiJava />,
    language: "Java",
    bgColor: "bg-blue-600-lighter"
  },
  {
    id: 1,
    languageIcon: <DiJsBadge />,
    language: "Javascript",
    bgColor: "bg-yellow-light"
  },
  {
    id: 2,
    languageIcon: <DiMsqlServer />,
    language: "MySQL",
    bgColor: "bg-blue-600"
  },
  {
    id: 3,
    languageIcon: <DiAws />,
    language: "AWS",
    bgColor: "bg-orange"
  },
  {
    id: 4,
    languageIcon: <DiPython />,
    language: "Python",
    bgColor: "bg-blue-600-dark"
  },
  {
    id: 5,
    languageIcon: <DiReact />,
    language: "React",
    bgColor: "bg-blue-600"
  },
  {
    id: 6,
    languageIcon: <DiRubyRough />,
    language: "Ruby",
    bgColor: "bg-red-light"
  },
  {
    id: 7,
    languageIcon: <DiDotnet />,
    language: ".Net",
    bgColor: "bg-blue-600"
  }
];
