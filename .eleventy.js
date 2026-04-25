module.exports = function (eleventyConfig) {
  // Pass static assets straight through to _site/
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("cli.css");
  eleventyConfig.addPassthroughCopy("docs/docs.css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.ico");
  eleventyConfig.addPassthroughCopy("site.webmanifest");

  return {
    templateFormats: ["njk"],
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
    },
  };
};
