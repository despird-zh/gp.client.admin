import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack/prod';
import ora from 'ora';
import fs from 'fs-extra';
import config from '../config';

const appPath = path.join(config.rootPath, config.appPath);
// prepare the spinner fake icon
const spinner = ora({
  text: 'Building...',
  spinner: 'circleQuarters',
  color: 'green'
});

spinner.start();

let done = function(error, stats) {
  if (error) {
    throw error;
  }

  process.stdout.write('\n\n' + stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n');

  spinner.stop();
}
// prepare a clean dist content
let deleteFolderRecursive = function(path) {
    var files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};
process.stdout.write('\n\n Deleting ' + appPath );
deleteFolderRecursive(appPath);
process.stdout.write('\n Done cleaning ' + appPath + '\n\n');
// build the output of app
webpack(webpackConfig, done);
