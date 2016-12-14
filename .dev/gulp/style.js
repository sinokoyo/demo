/*
 * @fileOverview CSSコンパイル関連タスク
 *
 */

'use strict';

const gulp	= require('gulp');
const $			= require('gulp-load-plugins')({
	pattern: ['gulp-', 'nib']
});

// 設定ファイルからのパス読み出し
const conf = require('./config');
const paths = conf.paths;

// -------------------- //
// Compile Sass/SCSS
// -------------------- //
gulp.task('compile:styles', false, () => {
	return gulp.src(
		[path.join(paths.src, 'style/**/*.+(sass|scss)')]
	)
	.pipe($.plumber())
	.pipe($.sass())
	.pipe($.csscomb())
	.pipe($.pleeease(
		{
			autoprefixer: {browsers: ['chrome > 0%']},
			mqpacker: true,
			minifier: true,
		}
	))
	.pipe($.sourcemaps.write())
	.pipe(gulp.dest(paths.dst));
});




















