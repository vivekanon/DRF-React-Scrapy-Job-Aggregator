import React from "react";


import SEO from "../components/misc/seo";
import { FormResults } from "../components/results/formResults";
import { IndexForm } from "../components/index/indexForm";
import IndexNavigation from "../components/index/indexNavigation";

function LoginPage() {
  return (
     <>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <IndexForm />
      <IndexNavigation />
      <FormResults />
    </>
  );
}

export default LoginPage;
