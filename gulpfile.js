const gulp = require('gulp');

const serve = require('./gulp/tasks/serve');
const pug2html = require('./gulp/tasks/pug2html');
const styles = require('./gulp/tasks/styles');
const watch = require('./gulp/tasks/watch');
const scripts = require('./gulp/tasks/script');
const script_plugins = require('./gulp/tasks/script_plugins');
const clean = require('./gulp/tasks/clean');
const moveAssets = require('./gulp/tasks/moveAssets');
const images = require('./gulp/tasks/images');

const dev = gulp.parallel(pug2html, styles, scripts, script_plugins);

const build = gulp.series(
  clean,
  styles,
  scripts,
  script_plugins,
  images,
  moveAssets
);

module.exports.scripts = gulp.series(scripts);
module.exports.styles = gulp.series(clean, styles, images, moveAssets, watch);
module.exports.start = gulp.series(build, dev, serve);
module.exports.build = build;
