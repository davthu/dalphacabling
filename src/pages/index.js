import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import logo from "../images/logo.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Hem" keywords={[]} />
      <div className="bg-grey-darkest min-h-screen text-sans flex flex-col">
        <div className="flex justify-center items-center flex-1">
          <img src={logo} alt="" className="w-3/4 md:w-1/2" />
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
