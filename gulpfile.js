"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const babel = require('gulp-babel');
const minify = require("gulp-babel-minify");
sass.compiler = require("node-sass");

gulp.task("sass", function () {
	return gulp
		.src("./public/src/style/**/*.scss")
		.pipe(sass.sync().on("error", sass.logError))
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(gulp.dest("./public/dist/style"));
});
 
gulp.task('babel', () =>
    gulp.src('D:\\Documents\\Projetos\\assessment-frontend\\public\\src\\script\\*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('./public/build'))
);

gulp.task("minify", () =>
  gulp.src("./public/build/*.js")
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest("./public/dist/script"))
);

gulp.task("watch", function () {
	gulp.watch("./public/src/style/**/*.scss", gulp.series("sass"));
});
