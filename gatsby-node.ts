const fs = require("fs")

exports.onPostBuild = ({ reporter, basePath, pathPrefix }) => {
  fs.copyFile("./src/data/clients.json", "./public/clients/json", (err) => {
    if (err) throw err
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
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
