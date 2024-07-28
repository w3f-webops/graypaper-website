import { GatsbyNode } from "gatsby"

const fs = require("fs")

export const onPostBuild: GatsbyNode["onPostBuild"] = () => {
  fs.copyFile(
    "./src/data/clients.json",
    "./public/clients.json",
    (err: NodeJS.ErrnoException | null) => {
      if (err) throw err
    },
  )
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
