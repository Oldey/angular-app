var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglifyJS = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    jade = require('gulp-jade'),
    pump = require('pump');
 
gulp.task('styles', function(cb) {
  pump([
    gulp.src([
      './app/bower_components/bootstrap/dist/css/bootstrap.css',
      './app/app.animations.css'
    ]),
    concat('styles.css'),
    minifyCSS(),
    (gulp.dest('./app/bundles'))
  ], cb)
});

gulp.task('scripts', function(cb) {
  pump([
    gulp.src([
      './app/bower_components/jquery/dist/jquery.js',
      './app/bower_components/angular/angular.js',
      './app/bower_components/angular-animate/angular-animate.js',
      './app/bower_components/angular-resource/angular-resource.js',
      './app/bower_components/angular-route/angular-route.js',
      './app/app.module.js',
      './app/app.config.js',
      './app/core/core.module.js',
      './app/core/getData/getData.module.js',
      './app/core/getData/getData.service.js',
      './app/core/getData/getDataTwo.module.js',
      './app/core/getData/getDataTwo.service.js',
      './app/main/main.module.js',
      './app/main/main.component.js',
      './app/example-one/example-one.module.js',
      './app/example-one/example-one.component.js',
      './app/example-two/example-two.module.js',
      './app/example-two/example-two.component.js'
    ]),
    concat('scripts.js'),
    uglifyJS(),
    gulp.dest('./app/bundles')
  ], cb)
});
 
gulp.task('templates', function(cb) {
  pump([
    gulp.src([
      './app/index.jade',
      './app/main/main.template.jade',
      './app/example-one/example-one.template.jade',
      './app/example-two/example-two.template.jade'
    ]),
    jade(),
    gulp.dest(function(file){
      return file.base;
    })
  ], cb)
});

gulp.task('watch', function() {
	gulp.watch('./app/**/*.css', ['styles']);
  gulp.watch('./app/**/*.js', ['scripts']);
  gulp.watch('./app/**/*.jade', ['templates'])
});

gulp.task('default', ['styles', 'scripts', 'templates']);