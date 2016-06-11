/**
 * browserSync
 */

 var  gulp         = require('gulp'),
      browserSync  = require('browser-sync'),
      reload       = browserSync.reload;

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});
