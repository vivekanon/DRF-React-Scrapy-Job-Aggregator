import React from "react";


import SEO from "../components/misc/seo";
import { IndexForm } from "../components/index/indexForm";
import IndexNavigation from "../components/index/indexNavigation";
import CompanyResults from "../components/results/companyResults";

function CompaniesPage() {
  return (
     <>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <IndexForm />
      <IndexNavigation />
      <CompanyResults />
    </>
  );
}

export default CompaniesPage;
