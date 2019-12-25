var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); // Подключаем Sass пакет

gulp.task('sass', function() { // Создаем: таск: "sass"
    return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Берем источник
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError)) //Преобразуем Sass в CSS
        .pipe(gulp.dest('css')) // Выгружаем результат в папку css
});

gulp.task('watch', function() {
    gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
});

gulp.task('default', ['watch']);