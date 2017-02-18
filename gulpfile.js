const gulp = require('gulp')
const minifyCss = require('gulp-minify-css')
const minifyJs = require('gulp-uglify')
const order = require('gulp-order')
const concat = require('gulp-concat')
const del = require('del')

gulp.task('clean:css', function () {
  return del([
    'css/dist/*.css'
  ])
})

gulp.task('clean:js', function () {
  return del([
    'js/dist/*.js'
  ])
})

gulp.task('minify-css', ['clean:css'], function () {
  return gulp.src('css/*.css')
                .pipe(concat('all.min.css'))
                .pipe(minifyCss())
                .pipe(gulp.dest('css/dist/'))
})

gulp.task('minify-js', ['clean:js'], function () {
  return gulp.src('js/*.js')
                .pipe(order([
                  'js/jquery-3.1.1.min.js',
                  'js/task.js'
                ]))
                .pipe(concat('all.min.js'))
                .pipe(minifyJs())
                .pipe(gulp.dest('js/dist/'))
})

gulp.task('build', ['minify-css', 'minify-js'], function () {
})
