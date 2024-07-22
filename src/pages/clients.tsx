import type { HeadFC, PageProps } from "gatsby"
import React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"
import clients from "../data/clients.json"

type Client = typeof clients[number];
const sortClients = (a: Client, b: Client) => {
  // First, compare by lang_set
  const langSetComparison = a.lang_set.localeCompare(b.lang_set);
  if (langSetComparison !== 0) return langSetComparison;

  // If lang_set is the same, compare by lang
  const langComparison = a.lang.localeCompare(b.lang);
  if (langComparison !== 0) return langComparison;

  // If lang is also the same, compare by milestone (descending order)
  const milestoneComparison = b.milestone - a.milestone;
  if (milestoneComparison !== 0) return milestoneComparison;

  // If milestone is also the same, compare by name
  return a.name.localeCompare(b.name);
};

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <article>
        <h2 id="Clients" className="text-center">{t("Clients")}</h2>

        <p>
          The <a href="/prize"><span className="jam">
            <span>J</span>am
          </span> {" "}Implementer’s Prize</a> encourages multiple
          client implementations to boost network resilience. The following
          table list the publicly known clients in development.
        </p>
        <p>
          If you want to list your client or update your listing, please request
          the change{" "}
          <a
            target="_blank"
            href="https://github.com/w3f-webops/graypaper-website/issues/new?assignees=&labels=&projects=&template=client-listing-request.md&title=Client+Listing%3A+XYZ"
          >
            here
          </a>
          .
        </p>
        <div className="overflow-x-scroll py-4 font-normal">
          <table className="col-1-l col-2-c col-3-l col-4-c col-5-c col-6-l">

            <thead>
              <tr>
                <th>Name</th>
                <th>Set</th>
                <th>Language</th>
                <th>Milestone</th>
                <th>Web</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {clients
                .sort(sortClients)
                .map((client, index) => (
                  <tr key={index} className="borders-custom">
                    <td className="text-nowrap">{client.name}</td>
                    <td><em>{client.lang_set}</em></td>
                    <td>{client.lang}</td>
                    <td>{client.milestone > 0 ? client.milestone : "-"}</td>
                    <td>
                      {client.homepage.length === 0 ? "-" :
                        <a target="_blank" href={client.homepage}>{`[${index + 1}]`}</a>}
                    </td>
                    <td className="w-full text-nowrap font-mono text-sm">{client.contact.join(", ")}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <table className="borders-custom text-sm col-1-r font-normal leading-3">
          {clients.map((client, index) => {
            if (client.homepage.length === 0) return null
            return (
              <tr key={index} className="borders-custom">
                <td>{`[${index + 1}]`}</td>
                <td><a target="_blank" href={client.homepage}>{client.homepage}</a></td>
              </tr>
            )
          })}
        </table>

      </article>
    </Layout>
  )
}

export default Page

export const Head: HeadFC<{}, { langKey?: string }> = (props) => {
  const { t, i18n } = useTranslation(undefined)
  return (
    <>
      <CommonHead />
      <html id="html" lang={i18n.language} />
      <title id="title">{`JAM ${t("Clients")}`}</title>
      <meta
        id="description"
        name="description"
        content={"List of Client implementing the JAM protocol."}
      />
    </>
  )
}
