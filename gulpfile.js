const gulp = require('gulp');

gulp.task('copyMsdaThemeAssetsToDist', function () {
  return gulp.src('./src/msda-theme/*')
    .pipe(gulp.dest('./dist/angular-msda/msda-theme/'));
});
