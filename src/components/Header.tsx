import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Graypaper from "../images/graypaper.png";
import { Link } from "gatsby";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-center md:justify-end gap-4 w-full sticky top-4">
        <Link to="/news">
          <button className="font-unbounded text-sm">News</button>
        </Link>
        <a href={Graypaper}>
          <button className="font-unbounded text-sm">Download</button>
        </a>

        <a href="https://matrix.org/">
          <button className="font-unbounded text-sm">Resources</button>
        </a>
        <Link to="/implementations">
          <button className="font-unbounded text-sm">Implementations</button>
        </Link>
        <Link to="/prize">
          <button className="font-unbounded text-sm">Prize</button>
        </Link>
        <Link to="/swag">
          <button className="font-unbounded text-sm">Swag</button>
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
