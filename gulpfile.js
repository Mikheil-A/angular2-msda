const gulp = require('gulp');

gulp.task('copyLibraryAssetsFolderToDist', function () {
  return gulp.src('./projects/angular-msda/src/assets/*')
    .pipe(gulp.dest('./dist/angular-msda/assets/'));
});
