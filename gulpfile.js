const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const through2 = require('through2');
const fs = require('fs');

const paths = {
  dest: {
    lib: 'lib', // commonjs
    esm: 'esm', // ES module
    dist: 'dist', // umd
  },
  scripts: ['src/**/*.{ts,tsx}', '!src/**/demo/*.{ts,tsx}'], // 脚本文件路径
};

/**
 * 编译脚本文件
 * @param {string} babelEnv babel环境变量
 * @param {string} destDir 目标目录
 */
function compileScripts(babelEnv, destDir) {
  const { scripts } = paths;
  process.env.BABEL_ENV = babelEnv;
  return gulp
    .src(scripts)
    .pipe(babel()) // 使用gulp-babel处理
    .pipe(gulp.dest(destDir));
}

/**
 * 编译cjs
 */
function compileCJS() {
  const { dest } = paths;
  return compileScripts('cjs', dest.lib);
}

/**
 * 编译esm
 */
function compileESM() {
  const { dest } = paths;
  return compileScripts('esm', dest.esm);
}

/**
 * 编译umd
 */
function compileUMD() {
  return gulp
    .src(`${paths.dest.esm}/index.js`)
    .pipe(
      gulpWebpack(
        {
          output: {
            filename: 'tetrisly.production.min.js',
            library: {
              type: 'umd',
              name: 'tetrislyJS',
            },
          },
          mode: 'production',
        },
        webpack,
      ),
    )
    .pipe(gulp.dest(paths.dest.dist));
}

/**
 * 生成css
 */
function generateCssVar() {
  return gulp.src(`${paths.dest.lib}/styles/color.js`).pipe(
    through2({ objectMode: true }, function (file, encoding, next) {
      const { ColorConfig } = require(file.path);

      let cssContent = ':root {\n';
      let sassContent = '// color config';
      let lessContent = '// color config';
      for (const varName in ColorConfig) {
        const cssVarName = `  --color-${varName.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        const sassVarName = `$color${varName}`;
        const lessVarName = `@color${varName}`;
        cssContent += `${cssVarName}: ${ColorConfig[varName]};\n`;
        sassContent += `${sassVarName}: ${ColorConfig[varName]};\n`;
        lessContent += `${lessVarName}: ${ColorConfig[varName]};\n`;
      }
      cssContent += '}';
      fs.writeFileSync(`${paths.dest.lib}/styles/color.css`, cssContent);
      fs.writeFileSync(`${paths.dest.esm}/styles/color.css`, cssContent);
      fs.writeFileSync(`${paths.dest.lib}/styles/color.scss`, sassContent);
      fs.writeFileSync(`${paths.dest.esm}/styles/color.scss`, sassContent);
      fs.writeFileSync(`${paths.dest.lib}/styles/color.less`, lessContent);
      fs.writeFileSync(`${paths.dest.esm}/styles/color.less`, lessContent);

      next(null, file);
    }),
  );
}

const buildScripts = gulp.series(compileCJS, compileESM, compileUMD, generateCssVar);

// 并行任务 后续加入样式处理 可以并行处理
const build = gulp.parallel(buildScripts);

exports.build = build;

exports.default = build;
