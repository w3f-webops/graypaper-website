import { Link, PageProps } from "gatsby"
import * as React from "react"
import { useTranslation } from "react-i18next"
import JamLogoSmall from "../images/jam-compact.png"
import { cn } from "../utils"
import { LanguageSelect } from "./LanguageSelect"
import { LayoutProps } from "./Layout"

export const Navigation: React.FC<Omit<LayoutProps, "children">> = (props) => {
  const { t } = useTranslation()
  return (
    <header
      aria-label="navigation"
      className={cn("sticky top-0 z-50 w-full bg-[#0002] backdrop-blur-sm", {
        "mx-auto max-w-[80ch]": !props.isFull,
      })}
    >
      <div
        className={cn(
          "flex flex-row flex-wrap content-center items-center justify-center gap-x-8 px-6 py-2 font-unbounded text-xs xs:justify-between",
          {
            "gap-x-8 gap-y-2 xs:gap-0": !props.isRoot,
          },
        )}
      >
        {props.isRoot ? (
          <div className="invisible sm:visible" />
        ) : (
          <Link to="/" className="self-start">
            <img
              className="h-8 justify-self-start xs:mt-0"
              src={JamLogoSmall}
              alt="JAM Logo"
            />
          </Link>
        )}

        <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-4 py-2 transition-all sm:justify-end">
          <Link to="/news">
            <button>{t("News")}</button>
          </Link>
          <Link to="/resources">
            <button>{t("Resources")}</button>
          </Link>
          <Link to="/clients">
            <button>{t("Clients")}</button>
          </Link>
          <Link to="/tour">
            <button>{t("Tour")}</button>
          </Link>
          <Link to="/lectures">
            <button>{t("Lectures")}</button>
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
