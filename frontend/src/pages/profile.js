import React from "react";
import Layout from "../components/misc/layout";
import SEO from "../components/misc/seo";

import "../components/index/index.css";
import ProfileTop from "../components/profile/profileTop";

function ProfilePage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
    <ProfileTop />
    </Layout>
  );
}

export default ProfilePage;
