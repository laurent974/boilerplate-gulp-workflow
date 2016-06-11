/**
 * Generation du CSS
 */

var   gulp =          require('gulp'),
      sass =          require('gulp-sass'),
      concat =        require('gulp-concat'),
      sourcemaps =    require('gulp-sourcemaps'),
      autoprefixer =  require('gulp-autoprefixer'),
      newer =         require('gulp-newer'),
      cssnano =       require('gulp-cssnano'),
      browserSync =   require('browser-sync'),
      reload      =   browserSync.reload,
      plumber =       require('gulp-plumber');

var   config =      require('../config').sass;

gulp.task('sass', function() {
  gulp.src([config.src])
      .pipe(sourcemaps.init())
      .pipe(newer(config.src))
      .pipe(plumber({
        handleError: function (err) {
          notify.onError('Error: <%= error.message %>');
          this.emit('end');
        }
       }))
      .pipe(sass())
      .pipe(sourcemaps.write({includeContent: false}))
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(autoprefixer())
      .pipe(cssnano())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.dest))
      .pipe(reload({stream: true}));
});
