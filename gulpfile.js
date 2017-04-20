'use strict';

var gulp = require('gulp'),
  concat = require("gulp-concat"),
  del = require('del'),
  browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: ''
    },
    notify: false
  });
});

var jsFiles = [
  'node_modules/angular/angular.min.js',
  'node_modules/leaflet/dist/leaflet.js',
  'node_modules/angular-simple-logger/dist/angular-simple-logger.min.js',
  'node_modules/ui-leaflet/dist/ui-leaflet.min.js',
  'node_modules/leaflet.markercluster/dist/leaflet.markercluster.js',
  'app/*.js'
];

var cssFiles = [
  'node_modules/leaflet/dist/leaflet.css',
  'node_modules/bootstrap/dist/css/bootstrap.min.css',
  'node_modules/leaflet.markercluster/dist/*.css',
  'style.css'
];

gulp.task('js', function() {
  return gulp.src(jsFiles)
    .on('error', console.log)
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('css', function() {
  return gulp.src(cssFiles)
    .on('error', console.log)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function() {
  return del.sync('./dist/');
});

gulp.task('watch', ['js', 'css'], function () {
  gulp.watch('app/*.js', ['js'])
  gulp.watch('*.css', ['css'])
});

gulp.task('default', ['browser-sync', 'clean', 'css', 'js', 'watch']);
