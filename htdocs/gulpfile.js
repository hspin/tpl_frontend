var gulp = require('gulp');
var usemin = require('gulp-jade-usemin');
var cssnano = require('gulp-cssnano');
var wiredep = require('wiredep').stream;
var rename = require("gulp-rename");

gulp.task('usemin', function() {
  gulp.src('./app/jade/frame/working.jade')
    .pipe(usemin())
    .pipe(gulp.dest('./app/preview'));
});

gulp.task('rename-mv', function() {
  gulp.src("./app/jade/tmp/.master.jade")
  .pipe(rename("working.jade"))
  .pipe(gulp.dest("./app/jade/frame"));
});

gulp.task('rename-layout', function() {
  gulp.src("./app/preview/working.jade")
  .pipe(rename("layout.jade"))
  .pipe(gulp.dest("./app/jade/frame"));
});

gulp.task('minify-css', function() {
  return gulp.src('build/css/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('build/css/'));
});
