const gulp = require('gulp');
//var browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');


// задача gulp sass
gulp.task('sass', function(done) {
    gulp.src('dev/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets'))
        //.pipe(browserSync.stream())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'],{
            cascade: true
        }))
        .pipe(cssnano())

    done();
});

// задача gulp serve
gulp.task('serve', function(done) {

   /*  browserSync.init({
        server: 'public/stylesheets'
    }); */

    gulp.watch('dev/scss/**/*.scss', gulp.series('sass'));
    /* gulp.watch('dist/*.html').on('change', () => {
      browserSync.reload();
      done();
    }); */
  

    done();
});
//оновная задача gulp
gulp.task('default', gulp.series('sass', /* 'serve' */));