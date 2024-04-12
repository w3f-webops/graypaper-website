import type { PageProps } from "gatsby";
import React from "react";
import { createHead } from "../components/Head";
import { Layout } from "../components/Layout";
import Graypaper from "../images/graypaper.png";
const Page: React.FC<PageProps> = (props) => {
  return (
    <Layout {...props}>
      <main>
        <article>
          <nav className="toc">
            <h2 id="Resources">Resources</h2>
            <ol>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#graypaper">Download</a>
              </li>
              <li>
                <a href="#matrix">Contact</a>
              </li>
            </ol>
          </nav>

          <h3 id="news">News</h3>
          <table className="borders-custom">
            <tbody>
              <tr>
                <td>18/04/2024</td>
                <td>
                  <a
                    href="https://github.com/paritytech/polkajam"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline"
                  >
                    Graypaper JAM specification published
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <h3 id="download">Download</h3>
          <p>Get a copy of the Graypaper here:</p>
          <p className="text-center">
            <a href={Graypaper} className="underline" rel="noopener noreferrer">
              https://graypaper.com/graypaper.pdf
            </a>
          </p>

          <h3 id="contact">Contact</h3>
          <p>
            Join in on the development by discussing with us in our{" "}
            <a
              className="underline"
              href="https://matrix.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Matrix Channel
            </a>
            .
          </p>
        </article>
      </main>
    </Layout>
  );
};

export default Page;

export const Head = createHead({
  title: "JAM Resources",
});
