/*
* @Author: chenna
* @Date:   2016-10-07 20:42:36
* @Last Modified by:   chenna
* @Last Modified time: 2016-10-07 22:00:25
*/

'use strict';
//gulp主文件，用于注册任务
//此处代码都需要node执行
//API
//用requir来载入模块
var gulp= require('gulp');
var less=require('gulp-less');
var cssnano=require('gulp-cssnano')
//注册任务
gulp.task('copy',function (argument) {
	// 当gulp执行say任务时会自动执行该函数
	// 合并压缩之类的操作
	// 1.gulp取到一个文件并复制
	gulp.src('src/index.html') 
	//顺着管子将此处需要的操作传递进去，每个pipe是一个步骤
	.pipe(gulp.dest('dist/'))//目的地
	// .pipe()
	// console.log("hellow world!")
})
gulp.task('dist',function (argument) {
	// 2.gulp自动执行 gulp dist 即可
	gulp.watch('src/index.html',['copy']);//监视的文件与自动执行的函数
	gulp.watch('src/style/*.less',['style']);
})
//less编译
gulp.task('style',function(){
	gulp.src('src/style/*.less')//源文件
	.pipe(less())//编译 得到css文件
	.pipe(cssnano())
	.pipe(gulp.dest('dist/css/'));//目的地

})