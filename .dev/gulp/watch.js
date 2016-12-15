/*
 * @fileOverview 開発時の確認環境に関するタスク群
 *
 */

'use strict';

const path = require('path');
const gulp = require('gulp');
const $    = require('gulp-load-plugins')();

// Browser Sync
const bs = require('browser-sync').create();

// 設定ファイルからのパス読み出し
const paths = require('./config').paths;

gulp.task('bs:init', function(cb){
	bs.init({
		browser: 'Chrome',
		server:{
			baseDir: paths.dst
		}
	});
	cb();
});















gulp.task('bs:reload',function(){
	bs.reload();
});

gulp.task('watch', function(){
	console.log(paths.dst);
	let sassDir = path.join( paths.src, 'sass/**/*.+(sass|scss|css)');
	console.log(sassDir);

	$.watch(sassDir,
		gulp.series(
			'compile:styles',
			'bs:reload'
		)
	);

});


gulp.task('serve',
	gulp.series(
		(cb)=>{
			paths.dst = './dst';
			cb();
		},
		gulp.parallel(
			'bs:init',
			'watch'
		)
	)
);








