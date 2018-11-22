var gulp = require('gulp'),
Fiber = require('fibers'),
sass = require('gulp-sass'),
autoprefixer = require('autoprefixer');

gulp.task('styles', function() {
  console.log('styles');

  return gulp.src('./app/assets/styles/styles.css')
    .pipe(sass({fiber: Fiber})
    .on('error', sass.logError))
    .pipe(gulp.dest('./app/temp/styles/'));
});
