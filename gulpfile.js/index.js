'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
// const sass = require('gulp-sass');


// Paths
const dirs = {
  pug: './src/pug/**/*.pug',
  // scss: './src/scss/**/*.scss',
  // styles: './src/scss/styles.scss',
  // js: './src/js/**/*.js',
  dist: './dist'
};


/**
 * Renders html from pug
 */
let pugRender = () => gulp.src(dirs.pug)
  .pipe(pug())
  .pipe(gulp.dest(dirs.dist));


/**
 * Compiles scss files to styles.css
 */
let styles = () => {

};


 /**
 * Compiles js files
 */
// let scripts = () => (
//   gulp.src(dirs.js)
//     .pipe(gulp.dest(dirs.dist))
// );


/**
 * Runs browserSync server
 */
let browserSyncInit = () => {
  browserSync.init({
    server: {
      baseDir: dirs.dist
    },
    port: 3000
  });
};


/**
 * Reloads browserSync server
 * @param {Function} done callback
 */
let browserSyncReload = (done) => {
  browserSync.reload();
  done();
};


/**
 * Watches files for changes
 */
let watch = () => {
  browserSyncInit();
  gulp.watch(dirs.pug, gulp.series(pugRender, browserSyncReload));
  gulp.watch(dirs.scss, gulp.parallel(styles));
  // gulp.watch(dirs.js, gulp.series(scripts, browserSyncReload));
};

exports.pugRender = pugRender;
exports.styles = styles;
// exports.scripts = scripts;
exports.watch = watch;