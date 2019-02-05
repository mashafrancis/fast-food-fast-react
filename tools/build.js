import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle...'.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
console.log(err.bold.red);
return 1
  }
  const jsonStats = stats.toJson();
if (jsonStats.hasErrors) {
  return jsonStats.errors.map(error => console.log(error.red));
}
if (jsonStats.hasWarnings) {
  console.log('Webpack has generated the following warnings.'.bold.yellow);
  return jsonStats.warnings.map(warning => console.log(warning.yellow))
}
console.log(`Webpack stats: ${stats}` );

console.log('Your app has been compiled in production mode and writted to dist'.green);
return 0;
});
