import { Link, PageProps } from "gatsby";
import * as React from "react";
import JamLogoSmall from "../images/jam-compact.png";
import { cn } from "../utils";
import { LanguageSelect } from "./LanguageSelect";

export const Header: React.FC<Omit<PageProps, "children">> = (props) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0002] bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-row items-center py-2 gap-4 gap-x-8 md:gap-8 justify-center text-xs md:justify-between px-4 font-unbounded content-center  flex-wrap">
        <div
          className={cn({
            hidden: props.path === "/",
            "md:block": props.path === "/",
          })}
        >
          {props.path !== "/" && (
            <Link to="/">
              <img
                className="h-8 justify-self-start mt-2 md:mt-0"
                src={JamLogoSmall}
                alt="JAM Logo"
              />
            </Link>
          )}
        </div>

        <div className="flex flex-row gap-x-8 flex-wrap sm:justify-end justify-center py-2 gap-y-4 transition-all">
          <Link to="/resources">
            <button>Resources</button>
          </Link>

          {/* <Link to="/implementations">
            <button>Implementations</button>
          </Link> */}
          <Link to="/tour">
            <button>Tour</button>
          </Link>
          <Link to="/prize">
            <button>Prize</button>
          </Link>

          {/* <Link to="/swag">
            <button>Swag</button>
          </Link> */}
          <LanguageSelect />
        </div>
      </div>
    </header>
  );
};
export default Header;
