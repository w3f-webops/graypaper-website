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
      className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full bg-[#0002] backdrop-blur-sm"
    >
      <div
        className={cn(
          "xs:justify-between flex flex-row flex-wrap content-center items-center justify-center gap-x-8 px-6 py-2 font-unbounded text-xs",
          {
            "xs:gap-0 gap-x-8 gap-y-2": !props.isRoot,
          },
        )}
      >
        {props.isRoot ? (
          <div className="invisible sm:visible" />
        ) : (
          <Link to="/" className="self-start">
            <img
              className="xs:mt-0 h-8 justify-self-start"
              src={JamLogoSmall}
              alt="JAM Logo"
            />
          </Link>
        )}

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
