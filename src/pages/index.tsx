import { type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { CommonHead } from "../components/Head/CommonHead";
import { Layout } from "../components/Layout";
import Graypaper from "../images/graypaper.png";
import { useTranslation, Trans } from "react-i18next";

const IndexPage: React.FC<PageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Layout {...props}>
      <div className="flex flex-col items-center mt-10 sm:mt-20 sm:pr-[25px] md:pr-[30px]">
        <StaticImage
          className="w-[90%]  sm:w-[400px]"
          src="../images/jam-pen-polkadot.png"
          alt="JAM Logo"
          placeholder="blurred"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="w-full md:w-3/4">
          <h1
            className="text-center font-bold text-lg sm:text-2xl md:text-3xl mt-8 uppercase"
            dangerouslySetInnerHTML={{ __html: t("Graypaper.Title") }}
          />

          <div className="abstract indent-pars">
            <p
              className="no-indent"
              dangerouslySetInnerHTML={{ __html: t("Abstract.p1") }}
            />
            <p dangerouslySetInnerHTML={{ __html: t("Abstract.p2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("Abstract.p3") }} />
          </div>
          <div className="abstract">
            <p className="text-center">
              <a href={Graypaper}>{t("CTA.Download")}</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>JAM</title>
    <CommonHead />
  </>
);
