import type { PageProps } from "gatsby";
import * as React from "react";
import { createHead } from "../components/Head";
import { Layout } from "../components/Layout";

const Page: React.FC<PageProps> = (props) => {
  return (
    <Layout {...props}>
      <main>
        <article>
          <h2 id="News">News</h2>
          <table className="borders-custom">
            <tbody>
              <tr>
                <td>18/04/2024</td>

                <td>
                  <a
                    href="https://github.com/paritytech/polkajam"
                    target="_blank"
                  >
                    Graypaper JAM specification published
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </main>
    </Layout>
  );
};

export default Page;

export const Head = createHead({
  title: "JAM News",
});
