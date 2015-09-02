var gulp = require('gulp');
var rename = require('gulp-rename');
gulp.task('default', function() {
	gulp.run('jquery');
	gulp.run('bootstrap');
});

gulp.task('jquery', function() {
	gulp.src(['./bower_components/jquery/dist/jquery.min.js'])
	.pipe(rename('jquery.js'))
	.pipe(gulp.dest('jQueryCode/'));
});

gulp.task('bootstrap', function() {
	gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.min.css',
	 './bower_components/bootstrap/dist/js/bootstrap.min.js'])
	.pipe(gulp.dest('jQueryCode/'));
});