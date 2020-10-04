const gulp = require('gulp');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

module.exports = function scripts() {
  return (
    gulp
      .src(['src/js/scripts/*.js', 'src/js/main.js'])
      .pipe(sourcemaps.init())
      .pipe(
        babel({
          presets: ['@babel/env'],
        })
      )
      // .pipe(terser())
      .pipe(sourcemaps.write())
      .pipe(concat('main.min.js'))
      // .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('build/js'))
  );
};
