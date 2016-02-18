var gulp = require('gulp');
var usemin = require('gulp-jade-usemin');
var cssnano = require('gulp-cssnano');
var wiredep = require('wiredep').stream;
var rename = require("gulp-rename");
var jade = require('gulp-jade');
var watch = require('gulp-watch');
var affected = require('gulp-jade-find-affected');
var filter = require('gulp-filter');

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

gulp.task('watch-jade', function () {
    watch('app/jade/**/*.jade')
        .pipe(affected())
        .pipe(filter(function (file) {
            return !/\/_/.test(file.path) && !/^_/.test(file.relative);
        }))
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('app/preview'));
});
