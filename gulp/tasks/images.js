const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

module.exports = function images(cb) {
  return gulp
    .src([
      'src/assets/img/**/*.png',
      'src/assets/img/**/*.jpg',
      'src/assets/img/**/*.gif',
      'src/assets/img/**/*.jpeg',
    ])
    .pipe(webp())
    .pipe(gulp.dest('build/img/'))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    );
};
