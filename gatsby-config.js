module.exports = {
  siteMetadata: {
    description: "Portfolio of Ifthakhar Ahmaad Riyad",
    locale: "en",
    title: "Ifthakhar Ahmaad Riyad",
    formspreeEndpoint: "https://formspree.io/f/mqknwggj",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "classic",
      },
    },
  ],
};
