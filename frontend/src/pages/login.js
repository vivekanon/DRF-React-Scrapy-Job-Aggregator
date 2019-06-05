import React from "react";

import Layout from "../components/reuseable/layout";
import SEO from "../components/reuseable/seo";

function LoginPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
    </Layout>
  );
}

export default LoginPage;
