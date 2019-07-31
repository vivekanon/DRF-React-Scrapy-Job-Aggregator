import React from "react";

import Layout from "../components/misc/layout";
import SEO from "../components/misc/seo";
import IndexTop from "../components/index/indexTop";
import { FormResults } from "../components/results/formResults";
import { IndexForm } from "../components/index/indexForm";
import { IndexLanguage } from "../components/index/indexLanguage";
import "../components/index/index.css";
import IndexNavigation from "../components/index/indexNavigation";

function IndexPage() {
  return (
      <>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <IndexTop />
      <IndexForm />
      <IndexNavigation />
      <IndexLanguage />
      <FormResults />
    </>
  );
}

export default IndexPage;
