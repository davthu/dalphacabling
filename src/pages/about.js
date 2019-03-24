import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO title="Om oss" keywords={[]} />

      <div className="pt-16 min-h-screen text-sans flex flex-col">
        <div className="flex justify-center items-center flex-1">Om oss</div>
      </div>
    </Layout>
  );
}

export default AboutPage;
