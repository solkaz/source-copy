const gulp = require('gulp');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

gulp.task('default', () => {});

gulp.task('build:background', () => {
  console.log('building background page');
});

gulp.task('build:content_scripts', async () => {
  const bundle = await rollup.rollup({
    input: './src/content_scripts/main.js',
    plugins: [resolve(), commonjs()],
  });

  await bundle.write({
    file: './dist/content_scripts/main.js',
    format: 'iife',
  });
});

gulp.task('build:all', ['build:background', 'build:content_scripts']);
