"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task("sass", function () {
	return gulp
		.src("./public/src/style/**/*.scss")
		.pipe(sass.sync().on("error", sass.logError))
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(gulp.dest("./public/src/style/css"));
});

gulp.task("sass:watch", function () {
	gulp.watch("./public/src/style/**/*.scss", ["sass"]);
});