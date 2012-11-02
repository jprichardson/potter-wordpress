var program = require('commander')
  , wp2md = require('wp2md')
  , colors = require('colors')
  , S = require('string')

program
  .version(require('../package.json').version)
  .option('-h, --host [host]', 'REQUIRED. The host or url of the Wordpress blog.')
  .option('-u, --user [user]', 'REQUIRED. The user name to login the Wordpress blog.')
  .option('-p, --password [password]', 'REQUIRED. The password to login to the Wordpress blog.')
  .option('-l, --limit [limit]', 'The number of simultaneous requests to make. Default is 4.', 4)
  .option('-d, --dir [dir]', 'The directory to dump the files. Default is the current directory.', process.cwd())
  /*.options('-n, --numberOfArticles [numberOfArticles]', 'The number of articles to get. Default is 1000.', 1000)*/
  .parse(process.argv);

if (!program.host || !program.user || !program.password) {
  program.outputHelp();
  return;
}

program.url = program.host;
program.cleanCode = true;

var start = true;

console.log('\n  Fetching articles...\n')
wp2md(program)
.error(function (err) {
  console.error(err);
})
.article(function(article, next) {
  //console.log(article.content)
  var text = colors.cyan(S('Got').padLeft(10)) + ' : ' + colors.green('[' + S(article.date.toDateString()).padRight(12) + '] ') + article.title
  console.log(text)
  fs.writeFile(article.slug + '.md', makeFileText(article), function(err) {
    next();
  })
}).end(function() {
  console.log('\n  Done.\n');
})

function makeFileText(article) {
  var header = ['<!--']
    , body = [];
 
  header.push('author: ' + article.author)
  header.push('publish: ' + article.date)
  header.push('tags: ' + article.categories.join(', '))
  header.push('-->')
  header.push('\n')

  body.push(article.title)
  body.push(S('=').repeat(article.title.length).s)
  body.push('\n')

  return header.join('\n') + body.join('\n') + article.content;
}


