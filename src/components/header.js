import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Collapse } from "react-burgers";
import logoSymbol from "../images/logo-symbol.png";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-grey-darkest p-4 fixed w-full">
      <div className="z-10 relative flex justify-between items-center">
        <Collapse
          lineHeight={4}
          borderRadius={2}
          lineSpacing={6}
          width={36}
          active={isExpanded}
          color="#fff"
          onClick={() => toggleExpansion(!isExpanded)}
        />

        <a
          href="/"
          className="no-underline hover:underline font-bold text-lg text-white font-sans pr-6"
        >
          Dalhpa Cabling
        </a>
      </div>
      {isExpanded && (
        <div className="fadeIn flex fixed pin-t pin-l bg-orange min-h-screen text-sans flex-col w-full">
          <div className="flex justify-center items-center flex-1 flex-col text-3xl">
            <Link
              to="/services"
              className="slideInDown animated-delay-1s mt-4 no-underline hover:underline text-white"
            >
              Tjänster
            </Link>
            <Link
              to="/clients"
              className="slideInDown animated-delay-2s mt-4 no-underline hover:underline text-white"
            >
              Kunder
            </Link>
            <Link
              to="/about"
              className="slideInDown animated-delay-3s mt-4 no-underline hover:underline text-white"
            >
              Om oss
            </Link>
            <Link
              to="/contact"
              className="slideInDown animated-delay-4s mt-4 no-underline hover:underline text-white"
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
