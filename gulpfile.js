var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cssnano     = require('gulp-cssnano');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var cp          = require('child_process');

var messages = {
  jekyllDev: '<span style="color: grey">Running:</span> $ jekyll build for dev',
  jekyllProd: '<span style="color: grey">Running:</span> $ jekyll build for prod'
};

/**
 * Build the Jekyll Site in development mode
 */
gulp.task('jekyll-dev', function (done) {
  browserSync.notify(messages.jekyllDev);
  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--drafts', '--future', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-dev'], function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-dev, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-dev'], function() {
  browserSync.init({
    server: "_site",
    port: 2610
  });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
  return gulp.src(['_sass/styles.scss',
                   '_sass/maxcontent.scss'])
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 3 versions', '> 1%', 'ie 8'], { cascade: true }))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets/css'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(['_sass/**/*.scss','_sass/*.scss'], ['sass']);
  gulp.watch(['index.html', '_layouts/*.html', '_drafts/*', '_posts/*', '_pages/*', '_includes/*.html', '*.md', 'specials/*'], ['jekyll-rebuild']);
});


/**
 * Build the Jekyll Site in production mode
 */
gulp.task('jekyll-prod', function (done) {
  browserSync.notify(messages.jekyllProd);
  return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass-prod', function () {
  return gulp.src(['_sass/styles.scss',
                   '_sass/maxcontent.scss'])
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 3 versions', '> 1%', 'ie 8'], { cascade: true }))
    .pipe(cssnano())
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(gulp.dest('assets/css'));
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
gulp.task('build', ['sass-prod', 'jekyll-prod']);
