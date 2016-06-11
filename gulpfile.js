var requireDir  = require('require-dir'),
    gulp        = require('gulp');

requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', ['html', 'browser-sync', 'watch', 'vendorjs', 'sass', 'customjs', 'copyfonts', 'img']);
