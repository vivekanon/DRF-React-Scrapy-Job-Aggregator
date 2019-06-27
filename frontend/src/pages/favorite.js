import React from "react";
import SEO from "../components/misc/seo";

import "../components/index/index.css";
import ProfileTop from "../components/profile/profileTop";

function ProfilePage() {
  return (
    <>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
    <ProfileTop />
    </>
  );
}

export default ProfilePage;
