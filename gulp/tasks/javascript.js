/**
 * Compilation du javascript
 */

var gulp        = require('gulp'),
    concat      = require('gulp-newer'),
    sourcemaps  = require('gulp-sourcemaps'),
    plumber     = require('gulp-plumber'),
    newer       = require('gulp-newer'),
    uglify      = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

var config      = require('../config').javascript;

gulp.task('customjs', function() {
  gulp.src([config.custom.src])
      .pipe(newer(config.custom.src))
      .pipe(sourcemaps.init())
      .pipe(plumber({
        handleError: function (err) {
          console.log(err);
          this.emit('end');
        }
       }))
      .pipe(uglify())
      .pipe(concat(config.custom.outputName))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.custom.dest))
      .pipe(reload({stream: true}));
});

gulp.task('vendorjs', function() {
  gulp.src([config.vendor.src])
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat(config.vendor.outputName))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.vendor.dest));
});
