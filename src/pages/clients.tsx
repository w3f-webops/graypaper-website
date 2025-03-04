import type { HeadFC, PageProps } from "gatsby"
import React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"
import { clients } from "../data/clients"
import { uniqueArray } from "../utils"

type Client = (typeof clients)[number]

const sortClients = (a: Client, b: Client) => {
  // First, compare by lang_set
  const langSetComparison = a.languages[0].set.localeCompare(b.languages[0].set)
  if (langSetComparison !== 0) return langSetComparison

  // If lang_set is the same, compare by lang
  const langComparison = a.languages[0].name.localeCompare(b.languages[0].name)
  if (langComparison !== 0) return langComparison

  // If lang is also the same, compare by milestone (descending order)
  const milestoneComparison = b.milestone - a.milestone
  if (milestoneComparison !== 0) return milestoneComparison

  // If milestone is also the same, compare by name
  return a.name.localeCompare(b.name)
}

const ClientsPerLanguageSet = clients.reduce(
  (prev: Record<string, number>, cur) => {
    prev[cur.languages[0].set] = prev[cur.languages[0].set] || 0
    prev[cur.languages[0].set] += 1
    return prev
  },
  {},
)

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <article>
        <h2 id="Clients" className="text-center">
          {t("Clients")}
        </h2>

        <p dangerouslySetInnerHTML={{ __html: t("Clients.why") }} />

        <p
          dangerouslySetInnerHTML={{
            __html: t("Clients.amount", { numberOfClients: clients.length }),
          }}
        />

        <p className="text-center">
          <em>A</em>: {ClientsPerLanguageSet["A"]}, <em>B</em>:{" "}
          {ClientsPerLanguageSet["B"]}, <em>C</em>: {ClientsPerLanguageSet["C"]}
          , <em>D</em>: {ClientsPerLanguageSet["D"]}, <em>Z</em>:{" "}
          {ClientsPerLanguageSet["Z"] || 0}
        </p>

        <p dangerouslySetInnerHTML={{ __html: t("Clients.add") }} />

        <div className="overflow-x-scroll py-4 font-normal">
          <table className="col-1-l col-3-l col-4-l col-4-c col-5-c col-6-l">
            <thead>
              <tr>
                <th>{t("Clients.name")}</th>
                <th>{t("Clients.set")}</th>
                <th>{t("Clients.language")}</th>
                <th>{t("Clients.milestone")}</th>
                <th>{t("Clients.web")}</th>
                <th>{t("Clients.contact")}</th>
              </tr>
            </thead>
            <tbody>
              {clients.sort(sortClients).map((client, index) => (
                <tr key={index} className="borders-custom">
                  <td className="text-nowrap">{client.name}</td>
                  <td className="text-nowrap">
                    <em>
                      {uniqueArray(client.languages.map((l) => l.set)).join(
                        ", ",
                      )}
                    </em>
                  </td>
                  <td className="text-nowrap">
                    {client.languages.map((l) => l.name).join(", ")}
                  </td>
                  <td>{client.milestone > 0 ? client.milestone : "-"}</td>
                  <td>
                    {client.homepage.length === 0 ? (
                      "-"
                    ) : (
                      <a
                        target="_blank"
                        href={client.homepage}
                      >{`[${index + 1}]`}</a>
                    )}
                  </td>
                  <td className="w-full text-nowrap font-mono text-sm">
                    {client.contact.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <table className="borders-custom col-1-r text-sm font-normal leading-3">
          {clients.map((client, index) => {
            if (client.homepage.length === 0) return null
            return (
              <tr key={index} className="borders-custom">
                <td>{`[${index + 1}]`}</td>
                <td>
                  <a target="_blank" href={client.homepage}>
                    {client.homepage}
                  </a>
                </td>
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
