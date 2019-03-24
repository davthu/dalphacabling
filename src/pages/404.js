import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="pt-16 min-h-screen text-sans flex flex-col">
        <div className="flex justify-center items-center flex-1">
          Sidan hittades inte
        </div>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
