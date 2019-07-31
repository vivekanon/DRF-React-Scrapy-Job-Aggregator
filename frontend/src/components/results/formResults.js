import React, { useContext } from "react";
import { FetchContext } from "../../store/fetch";
import { Container, SubContainer } from "../shared/container";
import Loader from "../misc/loader";
import { Card } from './card'

export function FormResults() {
    const { data } = useContext(FetchContext);
    const jobList = data.payload.results;
    return (
      <Container>
        <SubContainer col>
          <p className="lg:pl-2 pt-6 pb-6 font-semibold">Latest Jobs</p>
          <div className="w-full flex justify-around flex-wrap mx-auto">
            {jobList ? (
              jobList.map(job=> (
                <Card key={job.id} title={job.title} date={job.created_date} id={job.id} />
              ))
            ) : (
              <Loader />
            )}
          </div>
          </SubContainer>
      </Container>
    );
  }