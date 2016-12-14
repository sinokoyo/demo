/*
 * @fileOverview watchタスク
 *
 */

'use strict';

const gulp = require('gulp');
const path = require('path');
const $    = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'run-sequence']
});

// 設定ファイルからのパス読み出し
const paths = require('./config').paths;


gulp.task('watch',()=>{

	$.watch(
		[path.join(paths.src, 'sass/**/*.+(sass|scss|css)')],
		function(){gulp.start('compile:styles');});

});



