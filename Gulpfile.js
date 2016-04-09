var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    gutil = require('gulp-util');

gulp.task('sass', function() {
  gulp.src('lib/app.scss')
    .pipe(sass({style:'compressed'}).on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(gulp.dest("dist"));
});

gulp.task('default', function() {
  gulp.watch('lib/**/*.scss', ['sass']);
});
