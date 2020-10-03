"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const babel = require('gulp-babel');
sass.compiler = require("node-sass");

gulp.task("sass", function () {
	return gulp
		.src("./public/src/style/**/*.scss")
		.pipe(sass.sync().on("error", sass.logError))
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(gulp.dest("./public/dist/style"));
});
 
gulp.task('default', () =>
    gulp.src('D:\\Documents\\Projetos\\assessment-frontend\\public\\src\\script\\*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./public/dist/script'))
);

gulp.task("watch", function () {
	gulp.watch("./public/src/style/**/*.scss", gulp.series("sass"));
});
