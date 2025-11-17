import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `JAM`,
    siteUrl: `https://www.graypaper.com`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-fix-fouc",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allNewsItem } }: any) => {
              return allNewsItem.nodes.map((node: any) => {
                // Parse date from DD/MM/YYYY format to ISO date
                const [day, month, year] = node.date.split("/")
                const isoDate = new Date(`${year}-${month}-${day}`).toISOString()

                return {
                  title: node.title,
                  description: node.title,
                  date: isoDate,
                  url: node.link,
                  guid: node.link,
                  custom_elements: [
                    { pubDate: isoDate },
                  ],
                }
              })
            },
            query: `
              {
                allNewsItem(sort: {date: DESC}) {
                  nodes {
                    title
                    link
                    date
                  }
                }
              }
            `,
            output: "/news/rss.xml",
            title: "JAM News RSS Feed",
            description: "Recent and past news about JAM (Join-Accumulate Machine)",
            site_url: "https://www.graypaper.com",
            feed_url: "https://www.graypaper.com/news/rss.xml",
          },
        ],
      },
    },
  ],
}

export default config
