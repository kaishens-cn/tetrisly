import * as childProcess from 'child_process';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as util from 'util';
import { Compiler } from 'webpack';
import { merge } from 'webpack-merge';

import common from './webpack.common';

const exec = util.promisify(childProcess.exec);

const scanFolder = (dir: string, callback: (file: string) => void) => {
  const arr = fs.readdirSync(dir);
  arr.forEach(item => {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      scanFolder(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
};

class GenerateTSDeclaration {
  constructor(options = {}) {}

  apply(compiler: Compiler) {
    const { webpack } = compiler;
    const { Compilation } = webpack;
    compiler.hooks.thisCompilation.tap('gen-ts-declaration', compilation => {
      compilation.hooks.processAssets.tap(
        {
          name: 'gen-ts-declaration',
          stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
        },
        assets => {
          // 生成ts的声明文件，直接执行tsc得了
          exec('tsc -d').then(() => {
            scanFolder('./lib/src/', fullPath => {
              if (path.extname(fullPath) === '.ts') {
                fs.copySync(fullPath, fullPath.replace('lib/src/', './dist/types/'));
              }
            });
            fs.removeSync('./lib');
          });
        },
      );
    });
  }
}

const config = merge(common, {
  mode: 'production',
  plugins: [new GenerateTSDeclaration()],
});

export default config;
