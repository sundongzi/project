const {Command} = require('commander')
const program = new Command()
let ora = require('ora')
let chalk = require('chalk')
// program.command('build').description('build web site').action(() => {
//   console.log('build')
// })

// program.command('service', {isDefault: true}).description('build web site').action(() => {
//   console.log('service')
// })
// function list(val) {
//   return val.split(',').map(Number);
// }

// program
//   .version('0.0.1')
//   .option('-t, --template-engine [engine]', 'Add template [engine] support', 'jade')
//   .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
//   .option('-l, --list [items]', 'Specify list items defaulting to 1,2,3', list, [1, 2, 3])
//   .requiredOption('-c, --cheese <type>', 'pizza must have cheese')

// program
//   .command('exec <cmd>')
//   .alias('ex')
//   .description('execute the given remote cmd')
//   .option('-e, --exec_mode <mode>', 'Which exec mode to use')
//   .action(function (cmd, options) {
//     console.log('exec "%s" using %s mode', cmd, options.exec_mode);
//   }).on('--help', function () {
//     console.log('  Examples:');
//     console.log();
//     console.log('    $ deploy exec sequential');
//     console.log('    $ deploy exec async');
//     console.log();
//   })

// program
//   .version('0.0.1')
//   .description('Fake package manager')
//   .command('install [name]', 'install one or more packages').alias('i')
//   .command('search [query]', 'search with optional query').alias('s')
//   .command('list', 'list packages installed')
//   .command('publish', 'publish the package').alias('p')


// program
//   .storeOptionsAsProperties(true); // <--- change behaviour

// program
//   .name('my-program-name')
//   .option('-n,--name <name>');

// program
//   .command('show')
//   .option('-a,--action <action>')
//   .action((cmd) => {
//     const options = cmd.opts(); // <--- use opts to access option values
//     console.log(options.action);
//   })
// program.parse(process.argv)
// const programOptions = program.opts(); // <--- use opts to access option values
// console.log(programOptions.name)
program
  .name('my-program-name')
  .option('-n,--name <name>'); // Oops, clash with .name()

program
  .command('show')
  .option('-a,--action <action>') // Oops, clash with .action()
  .action((cmd) => {
    const spinner = ora(chalk.yellow(`组件markdown模板初始化...`)).start()
    setTimeout(() => {
      spinner.text = chalk.green('成功')
      spinner.succeed()
    }, 1000)
    // console.log(cmd.action);
  });
try {
  // throw new Error('1111')
  program.parse(process.argv);
} catch(err){
  console.log('出错了！')
  process.exit(1)
}

// console.log(program.name)
