import React from "react";

import Layout from "../components/misc/layout";
import SEO from "../components/misc/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not found" />
      <div>
        <img
          src={abductionIllustration}
          className="block mx-auto w-1/2"
          alt="Ghost getting abducted by aliens"
        />
        <h2 className="bg-yellow inline-block my-8 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>
  </>
  );
}

export default NotFoundPage;
