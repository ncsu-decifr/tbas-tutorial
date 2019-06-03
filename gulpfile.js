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

gulp.task('tutorial1', function() {
    return gulp.src('tutorial1.md')
        .pipe(rename({
            extname: ".html"

        }))
        .pipe(markdown())

        .pipe(gulp.dest('/var/www/html/tbas2_1/pages'))
});

gulp.task('move_images1', function() {
    return gulp.src("images/tbas-tutorial1/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_1/pages/images/tbas-tutorial1'));
});
gulp.task('move_images2', function() {
    return gulp.src("images/tbas-tutorial2/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_1/pages/images/tbas-tutorial2'));
});
gulp.task('move_images3', function() {
    return gulp.src("images/tbas-tutorial3/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_1/pages/images/tbas-tutorial3'));
});

gulp.task('move_data', function() {
    return gulp.src("data/tbas-tutorial/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_1/pages/data/tbas-tutorial'));
});

gulp.task('default', [
    'markdown',
    'tutorial1',
    'move_images1',
    'move_images2',
    'move_images3',
    'move_data'
]);