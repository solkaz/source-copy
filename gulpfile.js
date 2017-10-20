const gulp = require('gulp');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const ROLLUP_PLUGINS = [resolve(), commonjs()];

gulp.task('default', () => {});

gulp.task('build:background', async () => {
  console.log('building background');
  const bundle = await rollup.rollup({
    input: './src/background/main.js',
    plugins: ROLLUP_PLUGINS,
  });

  await bundle.write({
    file: './dist/background/main.js',
    format: 'iife',
  });
});

gulp.task('build:content_scripts', async () => {
  console.log('building content_scripts');
  const bundle = await rollup.rollup({
    input: './src/content_scripts/main.js',
    plugins: ROLLUP_PLUGINS,
  });

  await bundle.write({
    file: './dist/content_scripts/main.js',
    format: 'iife',
  });
});

gulp.task('build:all', ['build:background', 'build:content_scripts']);
