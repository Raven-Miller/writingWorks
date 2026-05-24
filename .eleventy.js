export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles/style.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addCollection("collect", function (collectionApi) {
    return collectionApi.getFilteredByTag("collect");
  });

  return {
    htmlTemplateEngine: "njk",
    pathPrefix: "/writingWorks/",

    dir: {
      input: ".",
      output: "_site",
    },
  };
}
