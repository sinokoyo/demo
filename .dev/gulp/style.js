/*
 * @fileOverview CSSコンパイル関連タスク
 *
 */

'use strict';

const gulp = require('gulp');
const path = require('path');
const $    = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'nib']
});

// 設定ファイルからのパス読み出し
const paths = require('./config').paths;

// -------------------- //
// Compile Sass/SCSS
// -------------------- //
gulp.task('compile:styles', false, () => {
	console.log('compile:styles');
	return gulp.src(
		[path.join(paths.src, 'sass/**/*.+(sass|scss)')]
	)
	.pipe($.plumber())
	.pipe($.sass())
	.pipe($.csscomb())
	.pipe($.pleeease(
		{
			autoprefixer: {browsers: ['last 2 versions']},
			mqpacker: true,
			minifier: true,
		}
	))
	.pipe($.sourcemaps.write())
	.pipe(gulp.dest(paths.dst));
});




















