var gulp = require('gulp');
var ts = require('gulp-typescript');
var less = require('gulp-less');
var path = require('path');

/**
 * Copy assets
 */
gulp.task('copy', function () {
   return gulp.src('src/index.html')
    .pipe(gulp.dest('.ghpages')); 
});

/**
 * LESS compilation
 */
gulp.task('less', function () {
  return gulp.src('src/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'src', 'less', 'includes') ]
    }))
    .pipe(gulp.dest('.ghpages'));
});

/**
 * Compile TypeScript
 */
gulp.task('ts', ['copy'], function () {
    return gulp.src('src/ts/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'app.js'
        }))
        .pipe(gulp.dest('.ghpages'));
});

// default task
gulp.task('default', ['ts', 'less', 'copy']);