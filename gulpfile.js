var gulp = require('gulp'),
    rename = require('gulp-rename'),
    markdown = require('gulp-markdown');

gulp.task('markdown', function() {
    return gulp.src('README.md')
        .pipe(rename({
            extname: ".html",
            suffix: "-tutorial"

        }))
        .pipe(markdown())

        .pipe(gulp.dest('/var/www/html/tbas2_1/pages'))
});

gulp.task('move_images', function() {
    return gulp.src("images/tbas-tutorial/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_1/pages/images/tbas-tutorial'));
});

gulp.task('move_data', function() {
    return gulp.src("data/tbas-tutorial/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_1/pages/data/tbas-tutorial'));
});

gulp.task('default', ['markdown', 'move_images', 'move_data']);