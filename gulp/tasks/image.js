/**
 * Optimisation des images
 */

 var  gulp     = require('gulp'),
      newer    = require('gulp-newer'),
      imagemin = require('gulp-imagemin'),
      pngquant = require('imagemin-pngquant'),
      browserSync = require('browser-sync'),
      reload   = browserSync.reload;

var config     = require('../config').img;

gulp.task('img', function() {
  gulp.src(config.src)
      .pipe(newer(config.src))
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      }))
      .pipe(gulp.dest(config.dest))
      .pipe(reload({stream: true}));
});
