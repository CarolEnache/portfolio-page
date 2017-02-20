'use strict';

var path = require('path');
var gulpif = require('gulp-if');
var pngquant = require('imagemin-pngquant');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = path.join(taskTarget, dirs.fonts.replace(/^_/, ''));

  // Imagemin
  gulp.task('fonts', function() {
    return gulp.src(path.join(dirs.source, dirs.fonts, '**/*.{eot,svg,ttf,woff,woff2}'))
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));
  });
};