const {dest, src} = require('gulp');
const postCss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const autopreFixer = require('autoprefixer');
const cssNano = require('cssnano');
const rename = require('gulp-rename');

function styles() {
  var plugins = [
    autopreFixer(),
    cssNano()
  ];
  return src( source + scss + '/**/*.scss' )
    .pipe( sourceMaps.init() )
    .pipe( sass() )
    .pipe( postCss(plugins) )
    .pipe( rename({ extname: '.min.css' }) )
    .pipe( sourceMaps.write('.') )
    .pipe( dest( output + css ))
}

module.exports.scssCompile = styles;
