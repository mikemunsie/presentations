const gulp = require("gulp");
const sass = require("gulp-sass");

function compile() {
  console.log("I'm compiling your sass file");
  return new Promise((resolve, reject) => {
    gulp.src(["./sass/**/*.scss"])
    .pipe(sass())
    .pipe(gulp.dest("./dist/styles"))
    .on("end", function() {
      console.log("I'm done compiling yo sass files")
      return resolve();
    });
  });
}

module.exports = {
  compile
};