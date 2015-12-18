var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var karma = require('karma').server;
var protractor = require("gulp-protractor").protractor;
var connect = require('gulp-connect');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('seleniumUpdate',function(){
  sh.exec("node node_modules/protractor/bin/webdriver-manager update --standalone");
});

gulp.task('test', function(done) {
  karma.start({
    configFile: __dirname + '/tests/karma.conf.js',
    singleRun: true
  }, function() {
    done();
  });
});

gulp.task('serve', function() {
  connect.server({
    root: 'www',
    port: 8888
  });
});

gulp.task('e2e', function() {
  gulp.src(["./tests/e2e/**/*.js"])
    .pipe(protractor({
      configFile: "tests/protractor.conf.ios.js",
      args: ["--verbose"]
    })).pipe(protractor({
      configFile: "tests/protractor.conf.android.js",
      args: ["--verbose"]
    }));
});