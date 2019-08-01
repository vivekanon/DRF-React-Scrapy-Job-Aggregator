import React, { useContext} from "react";
import { FetchContext } from "../../store/fetch";
import { Container } from "../shared/container";
import { useHookFetch } from '../hooks/fetch'
import Loader from "../misc/loader";

export default function CompanyResults() {
    const { data } = useContext(FetchContext);
    const companyList = data.payload.results;
    useHookFetch("http://127.0.0.1:8000/company/")
    return (
        <Container wrap>
             {companyList ? (
              companyList.map(company=> (
                <CompanyCard key={company.id} name={company.company_name} jobs={company.companies}  />
              ))
            ) : (
              <Loader />
            )}
            <>
            {console.log(data)}
            </>
        </Container>
    );
}
const CompanyCard = (props) =>  (
    <div className="lg:w-1/6 md:w-2/5 w-2/5 flex flex-wrapflex-grow rounded p-4 sm:mt-2 mr-2 cursor-pointer card-shadow transform relative ">
        <div className="flex flex-wrap flex-grow lg:text-right md:text-left text-right items-start">
          <div className="w-full flex">
            <p>{props.name}</p>
          </div>
          <div className="w-full flex">
            {props.jobs}
          </div>
        </div>
      </div>
)
