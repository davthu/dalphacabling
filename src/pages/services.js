import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO title="Tjänster" keywords={[]} />
      <div className="pt-16 min-h-screen text-sans flex flex-col">
        <div className="flex justify-center items-center flex-1">Tjänster</div>
      </div>
    </Layout>
  );
}

export default ContactPage;
