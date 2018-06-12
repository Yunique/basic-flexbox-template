const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const reload      = browserSync.reload;


//Server
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "source"
        }
    });
    
    browserSync.watch('./source/**/*.*').on('change', reload);
});

//Autoprefixer
gulp.task ('prefix', function() {
    return gulp.src('source/css/main.css')
.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('build/css'));
});