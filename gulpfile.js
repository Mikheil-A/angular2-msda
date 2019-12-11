const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp.src('./projects/angular-msda/src/lib/core/style/globals.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/angular-msda-styles'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./projects/angular-msda/src/lib/core/style/globals.scss', ['sass']);
});
