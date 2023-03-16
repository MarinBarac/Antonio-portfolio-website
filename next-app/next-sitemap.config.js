module.exports = {
  siteUrl: process.env.WEBSITE_URL,
  exclude: ["/404"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404"],
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${process.env.WEBSITE_URL}sitemap.xml`,
      `${process.env.WEBSITE_URL}server-sitemap.xml`,
    ],
  },
};