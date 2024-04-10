import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Graypaper from "../images/graypaper.png";
import { Link } from "gatsby";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-center md:justify-end gap-4 w-full sticky top-4">
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

      <div className="flex flex-col items-center pr-[25px] md:pr-[80px]">
        <Link to="/">
          <StaticImage
            src="../images/jam-pen.png"
            alt="JAM Logo"
            placeholder="blurred"
            layout="fixed"
            width={400}
          />
        </Link>
      </div>
    </>
  );
};
export default Header;
