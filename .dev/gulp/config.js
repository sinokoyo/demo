/*
 * @fileOverview gulp実行時の基本設定(PATH等)
 *
 */

'use strict';

module.exports = {
	paths:{
		src    : 'src',
		dist   : 'dst',
		serve  : '.tmp/serve',
		build  : '',
		release: 'release'
	},
	minify: {
		scripts: true,
		styles : true,
		markups: false
	}

};

