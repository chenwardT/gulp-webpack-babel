var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  webpack = require('gulp-webpack'),
  path = require('path');

// Uglify
// Works on webpack output - not used by default.
gulp.task('uglify', function () {
  gulp.src('dist/bundle.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(livereload());
});

// Styles
// TODO: e.g. SASS compilation
gulp.task('styles', function () {
  console.log('styles placeholder');
});

// Webpack
gulp.task('bundle', function () {
  gulp.src('src/*.js')
    .pipe(plumber())
    .pipe(webpack({
      entry: './src/main.js',
      output: {
        path: __dirname,
        filename: 'bundle.js'
      },
      watch: true,
      module: {
        loaders: [
          {
            test: /\.js$/,
            include: [
              path.join(__dirname, 'src')
            ],
            loader: 'babel-loader'
          }
        ]
      }
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});

// "Manual" Reload
// Used in conjunction with changes to files that don't trigger build steps, e.g. HTML.
gulp.task('reload', function () {
  livereload.reload();
});

// Watch
// Covers JS and index.html
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('dist/*.js', ['bundle']);
  gulp.watch('index.html', ['reload']);
});

gulp.task('default', ['bundle', 'watch']);
