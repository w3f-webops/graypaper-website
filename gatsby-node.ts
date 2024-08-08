import { GatsbyNode } from "gatsby"
import { news } from "./src/data/news"
import { clients } from "./src/data/clients"
import { lectures } from "./src/data/lectures"
import * as fs from "fs"

export const onPostBuild: GatsbyNode["onPostBuild"] = () => {
  const clientsJson = JSON.stringify(clients, undefined, 2)
  fs.writeFileSync("./public/clients/json", clientsJson)
  fs.writeFileSync("./public/clients.json", clientsJson)

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
