const gulp = require('gulp');

module.exports = function script_plugins() {
  return gulp
    .src('src/js/plugins/*.js', {
      dot: true,
    })
    .pipe(gulp.dest('build/js'));
};
