import React, { useContext } from "react";
import axios from 'axios'
import { FetchContext } from "../../store/fetch";
import { navigate, Link } from "gatsby";
import { Container, SubContainer } from "../shared/container";
import { Card } from "../shared/card";
import { TextSub } from "../shared/text";

export default function IndexNavigation() {
    const { setData } = useContext(FetchContext);
    async function setBase() {
      if (window.location.pathname !== "/") {
        navigate('/')
      }
      await axios
        .get("http://127.0.0.1:8000/jobs")
        .then(response => setData({payload: response.data}))
        .catch(error => {
          console.log(error);
        });
    }
    return (
        <Container>
       
          <Card className="transform relative card">
            <Link
              className="truncate w-full h-full flex justify-center p-4 transform font-thin lg:text-base text-xs"
              activeClassName="card-shadow-indicator font-semibold"
              to="/"
              onClick={()=> setBase()}
            >
              <TextSub primary>Home</TextSub>
            </Link>
          </Card>
          <Card className="transform relative card">
            <Link
              className="truncate w-full h-full flex justify-center p-4 transform font-thin lg:text-base text-xs"
              to="/jobs"
              activeClassName="card-shadow-indicator"
            >
              <TextSub primary>Jobs</TextSub>
            </Link>
          </Card>
          <Card className=" transform relative card">
            <Link
              className="truncate w-full h-full flex justify-center p-4 transform font-thin lg:text-base text-xs"
              to="/companies"
              activeClassName="card-shadow-indicator"
            >
             <TextSub primary>Companies</TextSub>
            </Link>
          </Card>
  
          <Card className="transform relative card">
            <Link
              className="truncate w-full h-full flex justify-center p-4 transform font-thin lg:text-base text-xs"
              to="/trending"
              activeClassName="card-shadow-indicator"
            >
             <TextSub primary>Trending</TextSub>
            </Link>
          </Card>
      
          </Container>
    );
  }
  