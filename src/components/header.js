import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Collapse } from "react-burgers";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-grey-darkest p-10 fixed w-full">
      <div className="fixed z-10 -mt-6 -ml-6">
        <Collapse
          lineHeight={4}
          borderRadius={2}
          lineSpacing={6}
          width={36}
          active={isExpanded}
          color="#fff"
          onClick={() => toggleExpansion(!isExpanded)}
        />
      </div>

      <div
        className={`${
          isExpanded ? `flex` : `hidden`
        } fixed pin-t pin-l bg-grey-darkest min-h-screen text-sans flex-col w-full`}
      >
        <div className="flex justify-center items-center flex-1 flex-col text-3xl">
          <Link to="/" className="mt-4 no-underline text-white">
            Hem
          </Link>

          <Link to="/about" className="mt-4 no-underline text-white">
            Om oss
          </Link>

          <Link to="/contact" className="mt-4 no-underline text-white">
            Kontakt
          </Link>
        </div>
      </div>
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
