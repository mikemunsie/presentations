const sass = require("../libs/sass");

sass.compile().then(() => {
  console.log("All done with my default task homie");
});