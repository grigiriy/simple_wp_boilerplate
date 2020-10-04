const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const shorthand = require('gulp-shorthand');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

module.exports = function pug2html(cb) {
  return gulp
    .src([
      // 'src/scss/media.scss',
      // 'src/scss/fonts.scss',
      'src/scss/main.scss',
      // 'src/scss/components/*.scss',
    ])
    .pipe(plumber())
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(concat('main.css'))
    .pipe(shorthand())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'));
};
