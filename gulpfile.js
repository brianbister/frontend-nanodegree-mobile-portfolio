var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var minifyInline = require('gulp-minify-inline');
var imagemin = require('gulp-imagemin');

gulp.task('minify', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('minify-inline', function() {
  gulp.src('index.html')
    .pipe(minifyInline())
    .pipe(gulp.dest('.'));
});

gulp.task('image', function() {
  gulp.src('views/images/pizzeria.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});
