var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: './'
        },
    });
});

gulp.task('watch', ['sass', 'browserSync'], function () {
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('css/*.css', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
});