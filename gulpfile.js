const gulp = require('gulp');

gulp.task('copyMmdcToDist', function () {
  return gulp.src('./mmdc/dist/*.css')
    .pipe(gulp.dest('./dist/angular-msda/mmdc/'));
});

gulp.task('copyMsdaThemeAssetsToDist', function () {
  return gulp.src('./src/msda-theme/*')
    .pipe(gulp.dest('./dist/angular-msda/msda-theme/'));
});

gulp.task('default', ['copyMmdcToDist', 'copyMsdaThemeAssetsToDist']);
