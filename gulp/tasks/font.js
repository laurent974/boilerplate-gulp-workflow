/**
 * Copie les fonts vers le dist
 */

var gulp        = require('gulp'),
    newer       = require('gulp-newer'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload

var config      = require('../config').font;

gulp.task('copyfonts', function() {
  gulp.src(config.src)
      .pipe(newer(config.src))
      .pipe(gulp.dest(config.dest))
      .pipe(reload({stream: true}));
});
