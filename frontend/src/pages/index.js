import React from "react";

import Layout from "../components/misc/layout";
import SEO from "../components/misc/seo";
import IndexTop from "../components/index/indexTop";
import { IndexResults } from "../components/index/indexResults";
import { IndexForm } from "../components/index/indexForm";
import { IndexLanguage } from "../components/index/indexLanguage";
import "../components/index/index.css";

function IndexPage() {
  return (
      <>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <IndexTop />
      <IndexForm />
      <IndexLanguage />
      <IndexResults />
    </>
  );
}

export default IndexPage;
