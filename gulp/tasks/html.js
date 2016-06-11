/**
 * Watcher sur les html
 */

var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload;

var config       = require('../config').html;

gulp.task('html', function() {
  gulp.src(config.src)
      .pipe(reload({stream: true}));
 });
