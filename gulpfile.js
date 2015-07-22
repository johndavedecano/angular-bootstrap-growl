var gulp = require('gulp');
var uglify = require('gulp-uglify');


gulp.task('compress', function() {
    return gulp.src('dist/angular-bootstrap-growl.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/min'));
});