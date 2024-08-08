import { GatsbyNode } from "gatsby"
import { news } from "./src/data/news"
import { clients } from "./src/data/clients"
import * as fs from "fs"

export const onPostBuild: GatsbyNode["onPostBuild"] = () => {
  console.log("Post build polo")

  const clientsJson = JSON.stringify(clients, undefined, 2)
  fs.writeFileSync("./public/clients/json", clientsJson)
  fs.writeFileSync("./public/clients.json", clientsJson)

  const newsJson = JSON.stringify(news, undefined, 2)
  fs.writeFileSync("./public/news/json", newsJson)
  fs.writeFileSync("./public/news.json", newsJson)
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
