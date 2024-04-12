import type { PageProps } from "gatsby";
import * as React from "react";
import { CommonHead } from "../components/Head/CommonHead";
import { Layout } from "../components/Layout";

const Page: React.FC<PageProps> = (props) => {
  return (
    <Layout {...props}>
      <main>
        <article>
          <h2 id="Swag">Swag</h2>
          <div className="h-[50vh] flex flex-col justify-center items-center">
            <p>
              <i>Coming soon...</i>
            </p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export default Page;

export const Head = () => (
  <>
    <title>Swag</title>
    <CommonHead />
  </>
);
