var gulp = require('gulp'),
Fiber = require('fibers'),
sass = require('gulp-sass'),
autoprefixer = require('autoprefixer');

gulp.task('styles', function() {
  console.log('styles');

  return gulp.src('./app/assets/styles/styles.scss')
    .pipe(sass({fiber: Fiber, includePaths: "./node_modules/normalize-scss/sass"})
    .on('error', sass.logError))
    .pipe(gulp.dest('./app/temp/styles/'));
});
