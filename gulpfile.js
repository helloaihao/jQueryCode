var gulp = require('gulp');
var rename = require('gulp-rename');
gulp.task('default', function() {
	gulp.run('jquery');
});

gulp.task('jquery', function() {
	gulp.src(['./bower_components/jquery/dist/jquery.min.js'])
	.pipe(rename('jquery.js'))
	.pipe(gulp.dest('jQueryCode/'));
});