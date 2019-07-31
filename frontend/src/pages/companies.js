import React from "react";


import SEO from "../components/misc/seo";
import { FormResults } from "../components/results/formResults";
import { IndexForm } from "../components/index/indexForm";

function CompaniesPage() {
  return (
     <>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <IndexForm />
      <FormResults />
    </>
  );
}

export default CompaniesPage;
