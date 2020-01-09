var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cssnano     = require('gulp-cssnano');
var cp          = require('child_process');

var messages = {
  jekyllDev: '<span style="color: grey">Running:</span> $ jekyll build for dev',
  jekyllProd: '<span style="color: grey">Running:</span> $ jekyll build for prod'
};

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future Jekyll builds)
 */
function styles() {
  return gulp.src(['_sass/styles.scss', '_sass/maxcontent.scss'])
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 3 versions', '> 1%', 'ie 8'], { cascade: true }))
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets/css'))
}

function stylesProd() {
  return gulp.src(['_sass/styles.scss', '_sass/maxcontent.scss'])
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 3 versions', '> 1%', 'ie 8'], { cascade: true }))
    .pipe(cssnano())
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(gulp.dest('assets/css'))
}

/**
 * Server functionality handled by BrowserSync
 */
function browserSyncServe(done) {
  browserSync.init({
    server: '_site',
    port: 2610
  })
  done();
}

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

/**
 * Build Jekyll site
 */
function jekyllDev(done) {
  browserSync.notify(messages.jekyllDev)
  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--future', '--config=_config.yml,_config_dev.yml'], {stdio: 'inherit'})
  .on('close', done)
}

function jekyllProd(done) {
  browserSync.notify(messages.jekyllProd)
  return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'})
  .on('close', done)
}

/**
 * Watch source files for changes & recompile
 * Watch html/md files, run Jekyll & reload BrowserSync
 */
function watchMarkup() {
  gulp.watch(['index.html', '_layouts/*.html', '_drafts/*', '_posts/*', '_pages/*', '_includes/*.html', '*.md', 'specials/*'], gulp.series(jekyllDev, browserSyncReload));
}

function watchStyles() { 
  gulp.watch(['_sass/**/*.scss','_sass/*.scss'], styles)
}

function watch() {
  gulp.parallel(watchMarkup, watchStyles)
}

var serve = gulp.series(styles, jekyllDev, browserSyncServe)
var watch = gulp.parallel(watchMarkup, watchStyles)

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the Jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', gulp.parallel(serve, watch))
gulp.task('build', gulp.series(stylesProd, jekyllProd))