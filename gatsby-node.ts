import { GatsbyNode } from "gatsby"
import { news } from "./src/data/news"
import { clients } from "./src/data/clients"
import { lectures } from "./src/data/lectures"
import * as fs from "fs"

export const sourceNodes: GatsbyNode["sourceNodes"] = ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  // Create nodes for news items so they're available in GraphQL
  news.forEach((newsItem, index) => {
    const node = {
      ...newsItem,
      id: createNodeId(`NewsItem-${index}`),
      internal: {
        type: "NewsItem",
        contentDigest: createContentDigest(newsItem),
      },
    }
    createNode(node)
  })
}

// RFC 4180 CSV, prefixed with a UTF-8 BOM so Excel renders non-ASCII
// names and descriptions correctly.
const toClientsCsv = () => {
  const escape = (value: string | number) => {
    const s = String(value)
    return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
  }
  const header = [
    "name",
    "description",
    "homepage",
    "languages",
    "language_sets",
    "milestone",
    "contact",
  ]
  const rows = clients.map((client) => [
    client.name,
    client.description,
    client.homepage,
    client.languages.map((l) => l.name).join("; "),
    client.languages.map((l) => l.set).join("; "),
    client.milestone,
    client.contact.join("; "),
  ])
  return (
    "﻿" +
    [header, ...rows].map((row) => row.map(escape).join(",")).join("\r\n") +
    "\r\n"
  )
}

export const onPostBuild: GatsbyNode["onPostBuild"] = () => {
  // Adapt clients data to match the old format
  const adaptedClients = clients.map((client) => ({
    ...client,
    lang: client.languages.map((l) => l.name).join("/"),
    lang_set: client.languages.map((l) => l.set).join("/"),
  }))
  const clientsJson = JSON.stringify(adaptedClients, undefined, 2)
  fs.writeFileSync("./public/clients/json", clientsJson)
  fs.writeFileSync("./public/clients.json", clientsJson)
  fs.writeFileSync("./public/clients.csv", toClientsCsv())

  const newsJson = JSON.stringify(news, undefined, 2)
  fs.writeFileSync("./public/news/json", newsJson)
  fs.writeFileSync("./public/news.json", newsJson)

  const lecturesJson = JSON.stringify(lectures, undefined, 2)
  fs.writeFileSync("./public/lectures/json", lecturesJson)
  fs.writeFileSync("./public/lectures.json", lecturesJson)
}

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.node$/,
          use: ["node-loader"],
        },
      ],
    },
  })
}
