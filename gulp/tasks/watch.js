const gulp = require('gulp');

const styles = require('./styles');

module.exports = function watch(cb) {
  gulp.watch(
    'src/scss/**/*.scss',
    gulp.series(styles, (cb) => gulp.src('build/css'))
  );
};
