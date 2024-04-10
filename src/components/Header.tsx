import { Link, PageProps } from "gatsby";
import * as React from "react";
import Graypaper from "../images/graypaper.png";
import JamLogoSmall from "../images/jam-logo-small.png";

const Header: React.FC<Omit<PageProps, "children">> = (props) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-24 sm:h-12 flex-row items-center gap-x-8 gap-y-4 md:gap-8 justify-center text-xs md:justify-end px-4 font-unbounded content-center  flex-wrap">
        {props.path !== "/" && (
          <Link to="/">
            <img className="h-8" src={JamLogoSmall} alt="JAM Logo" />
          </Link>
        )}
        <Link to="/news">
          <button>News</button>
        </Link>
        <a href={Graypaper}>
          <button>Download</button>
        </a>

        <a href="https://matrix.org/">
          <button>Resources</button>
        </a>
        <Link to="/implementations">
          <button>Implementations</button>
        </Link>
        <Link to="/prize">
          <button>Prize</button>
        </Link>

        <Link to="/swag">
          <button>Swag</button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
