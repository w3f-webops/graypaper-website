import { Link, PageProps } from "gatsby"
import * as React from "react"
import { useTranslation } from "react-i18next"
import JamLogoSmall from "../images/jam-compact.png"
import { cn } from "../utils"
import { LanguageSelect } from "./LanguageSelect"

export const Navigation: React.FC<Omit<PageProps, "children">> = (props) => {
  const { t } = useTranslation()
  return (
    <header
      aria-label="navigation"
      className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full bg-[#0002] backdrop-blur-sm"
    >
      <div className="flex flex-row flex-wrap content-center items-center justify-center gap-4 gap-x-8 px-4 py-2 font-unbounded text-xs md:justify-between  md:gap-8">
        <div
          className={cn({
            hidden: props.path === "/",
            "md:block": props.path === "/",
          })}
        >
          {props.path !== "/" && (
            <Link to="/">
              <img
                className="mt-2 h-8 justify-self-start md:mt-0"
                src={JamLogoSmall}
                alt="JAM Logo"
              />
            </Link>
          )}
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-4 py-2 transition-all sm:justify-end">
          <Link to="/resources">
            <button>{t("Resources")}</button>
          </Link>
          <Link to="/tour">
            <button>{t("Tour")}</button>
          </Link>
          <Link to="/prize">
            <button>{t("Prize")}</button>
          </Link>
          <LanguageSelect />
        </div>
      </div>
    </header>
  )
}
export default Navigation
