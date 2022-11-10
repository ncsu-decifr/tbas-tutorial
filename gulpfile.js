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

        .pipe(gulp.dest('/var/www/html/tbas2_3/pages'))
});

gulp.task('tutorial1', function() {
    return gulp.src('tutorial*.md')
        .pipe(rename({
            extname: ".html"

        }))
        .pipe(markdown())

        .pipe(gulp.dest('/var/www/html/tbas2_3/pages'))
});

gulp.task('move_images1', function() {
    return gulp.src("images/tbas-tutorial1/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_3/pages/images/tbas-tutorial1'));
});
gulp.task('move_images2', function() {
    return gulp.src("images/tbas-tutorial2/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_3/pages/images/tbas-tutorial2'));
});
gulp.task('move_images3c', function() {
    return gulp.src("images/tbas-tutorial3c/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_3/pages/images/tbas-tutorial3c'));
});
gulp.task('move_images3', function() {
    return gulp.src("images/tbas-tutorial3/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_3/pages/images/tbas-tutorial3'));
});
gulp.task('move_images4', function() {
    return gulp.src("images/tbas-tutorial4/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_3/pages/images/tbas-tutorial4'));
});
gulp.task('move_images4a', function() {
    return gulp.src("images/tbas-tutorial4a/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_3/pages/images/tbas-tutorial4a'));
});
gulp.task('move_images1a', function() {
    return gulp.src("images/tbas-tutorial1a/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_3/pages/images/tbas-tutorial1a'));
});

gulp.task('move_images2a', function() {
    return gulp.src("images/tbas-tutorial2a/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_3/pages/images/tbas-tutorial2a'));
});
gulp.task('move_images5', function() {
    return gulp.src("images/tbas-tutorial5/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_3/pages/images/tbas-tutorial5'));
});
gulp.task('move_images6', function() {
    return gulp.src("images/tbas-tutorial6/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_3/pages/images/tbas-tutorial6'));
});
gulp.task('move_images7', function() {
    return gulp.src("images/tbas-tutorial7/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_3/pages/images/tbas-tutorial7'));
});

gulp.task('move_data', function() {
    return gulp.src("data/tbas-tutorial/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_3/pages/data/tbas-tutorial'));
});


// gulp.task('default', [
//     'markdown',
//     'tutorial1',
//     'move_images1',
//     'move_images2',
//     'move_images3',
//     'move_images3c',
//     'move_images4',
//     'move_images4a',
//     'move_images1a',
//     'move_images2a',
//     'move_images5',
//     'move_images6',
//     'move_images7',
//     'move_data'
// ]);

exports.default = gulp.series(
        'markdown',
        'tutorial1',
        'move_images1',
        'move_images2',
        'move_images3',
        'move_images3c',
        'move_images4',
        'move_images4a',
        'move_images1a',
        'move_images2a',
        'move_images5',
        'move_images6',
        'move_images7',
        'move_data'
    );