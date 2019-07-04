import React from "react";


import SEO from "../components/misc/seo";
import {IndexResults} from '../components/index/indexResults'
import { IndexForm } from "../components/index/indexForm";

function CompaniesPage() {
  return (
     <>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <IndexForm />
      <IndexResults />
    </>
  );
}

export default CompaniesPage;