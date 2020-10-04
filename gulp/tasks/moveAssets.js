const gulp = require('gulp');

module.exports = function moveAssets() {
  return gulp.src('src/assets/**/*.*').pipe(gulp.dest('build'));
};
