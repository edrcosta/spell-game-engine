const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('build', function () {

const files = [
    './libs/keypress-2.1.5.min.js',
    './src/audio.js',
    './src/canvas.js',
    './src/colission.js',
    './src/game-debugger.js',
    './src/game.js',
    './src/keyboard.js',
    './src/level.js',
    './src/math.js',
    './src/sprite-image.js',
    './src/sprite.js',
];

return gulp.src(files)
    .pipe(concat('spell.min.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
}); 