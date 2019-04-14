import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import logo from "../images/logo-dark.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Hem" keywords={[]} />
      <div className="bg-grey-darkest text-white min-h-screen text-sans flex flex-col">
        <div className="flex justify-center items-center flex-1 flex-col">
          <img src={logo} alt="" className="logo w-3/4 sm:w-1/2 md:w-1/3" />
          <div className="mt-10 text-center">
            <p className="text-lg">
              Heltäckande lösningar inom säkerhets- och teleteknik.
            </p>
            <a
              href="/services"
              className="inline-block no-underline text-lg bg-white hover:bg-orange text-grey-darkest hover:text-white font-semibold mt-6 py-4 px-8 rounded-full"
            >
              Se alla tjänster
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
