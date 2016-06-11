/**
 * Watch les modifications en live
 */

var gulp      = require('gulp');

var config    = require('../config').watch;

gulp.task('watch', function() {
  gulp.watch(config.jsSrc, ['customjs']);
  gulp.watch(config.imgSrc, ['img']);
  gulp.watch(config.cssSrc, ['sass']);
  gulp.watch(config.htmlSrc, ['html']);
});
