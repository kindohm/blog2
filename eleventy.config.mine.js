// const isProduction = process.env.NODE_ENV === `production`;

// console.log("isProduction", isProduction);

// const { DateTime } = require("luxon");

// const pluginRss = require("@11ty/eleventy-plugin-rss");
// const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
// const pluginBundle = require("@11ty/eleventy-plugin-bundle");
// const pluginNavigation = require("@11ty/eleventy-navigation");
// const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
// const path = require("path");
// const Image = require("@11ty/eleventy-img");

// module.exports = function (eleventyConfig) {
//   eleventyConfig.addPassthroughCopy({
//     "./public/": "/",
//     // "./node_modules/prismjs/themes/prism-okaidia.css": "/css/prism-okaidia.css",
//   });

//   // Watch content images for the image pipeline.
//   eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

//   // Official plugins
//   eleventyConfig.addPlugin(pluginRss);
//   eleventyConfig.addPlugin(pluginSyntaxHighlight);
//   eleventyConfig.addPlugin(pluginNavigation);
//   eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
//   eleventyConfig.addPlugin(pluginBundle);

//   eleventyConfig.addCollection("blog", function (collectionApi) {
//     return collectionApi
//       .getAll()
//       .filter((p) => p.inputPath.startsWith("./content/blog"))
//       .sort((a, b) => (a.inputPath > b.inputPath ? -1 : 1));
//   });

//   // // Filters
//   eleventyConfig.addFilter("stringify", (data) => {
//     console.log("data", data);
//     return JSON.stringify(data, null, 2);
//   });

//   eleventyConfig.addFilter("realTitle", (data) => {
//     return !data.title
//       ? DateTime.fromJSDate(data.page.date, { zone: "utc" }).toFormat(
//           "yyyy-LL-dd"
//         )
//       : data.title;
//   });

//   eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
//     // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
//     return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
//       format || "dd LLLL yyyy"
//     );
//   });

//   eleventyConfig.addFilter("htmlDateString", (dateObj) => {
//     // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
//     return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
//   });

//   eleventyConfig.addShortcode("image", async function (src, alt, sizes) {
//     // Prepend the image src with the full directory `inputPath`:
//     let imageSrc = `${path.dirname(this.page.inputPath)}/${src}`;

//     let metadata = await Image(imageSrc, {
//       widths: [300, 600],
//       // Write processed images to the correct `outputPath`
//       outputDir: path.dirname(this.page.outputPath),
//       // Prepend the correct path to the image `src` value
//       urlPath: this.page.url,
//     });

//     let imageAttributes = {
//       alt,
//       sizes,
//       loading: "lazy",
//       decoding: "async",
//     };

//     // You bet we throw an error on a missing alt (alt="" works okay)
//     return Image.generateHTML(metadata, imageAttributes);
//   });

//   return {
//     // Control which files Eleventy will process
//     // e.g.: *.md, *.njk, *.html, *.liquid
//     templateFormats: ["md", "njk", "html", "liquid"],

//     // Pre-process *.md files with: (default: `liquid`)
//     markdownTemplateEngine: "njk",

//     // Pre-process *.html files with: (default: `liquid`)
//     htmlTemplateEngine: "njk",

//     // These are all optional:
//     dir: {
//       input: "content", // default: "."
//       includes: "../_includes", // default: "_includes"
//       data: "../_data", // default: "_data"
//       output: "_site",
//     },

//     pathPrefix: isProduction ? "/blog2/" : "/",
//   };
// };
