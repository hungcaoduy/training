var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var streamify = require('gulp-streamify');
var sourcemaps = require('gulp-sourcemaps');
var jade = require('gulp-jade');
var gutil = require('gulp-util');

//http://www.smashingmagazine.com/2014/06/11/building-with-gulp/
//*GULP-LOAD-PLUGINS
//require commands above for gulp plugins can be replaced by loadplugins plugin as below
//var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
// plugins all from package.json will be lazily loaded and available via plugins.[camel casing names], e.g. plugins.uglify, plugins.dest

var es = require('event-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var assign = require('lodash.assign');
var browserSync = require('browser-sync');

gulp.task('scripts', function() {

    var jsFromCoffee = gulp.src('scripts/*.coffee')
        .pipe(coffee());

    var js = gulp.src('scripts/*.js');

    return es.merge(jsFromCoffee, js)
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});


//build jade
gulp.task('jade', function() {
    return gulp.src('**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist'));
});

//build less
gulp.task('less', function () {
    gulp.src('less/**/*.less')
        .pipe(gulp.watch())
        .pipe(plugins.less())
        .pipe(gulp.dest('css'))
        .pipe(plugins.livereload());
        //LiveReload combines with browser extensions (including a Chrome extension) to reload your browser every time a change to a file is detected. It can be used with the gulp-watch plugin or with the built-in gulp.watch() that I described earlier. Here’s an example from the README file of the gulp-livereload repository:
        //An alternative to LiveReload is available. BrowserSync is similar in that it displays changes in the browser, but it has a lot more functionality.
});

//build sass
gulp.task('sass', function () {
    gulp.src('sass/**/*.sass')
        .pipe(gulp.watch())
        .pipe(plugins.sass())
        .pipe(gulp.dest('css'))
        .pipe(plugins.livereload());
        //LiveReload combines with browser extensions (including a Chrome extension) to reload your browser every time a change to a file is detected. It can be used with the gulp-watch plugin or with the built-in gulp.watch() that I described earlier. Here’s an example from the README file of the gulp-livereload repository:
        //An alternative to LiveReload is available. BrowserSync is similar in that it displays changes in the browser, but it has a lot more functionality.
});


// *Fast browserify builds with watchify
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
var customOpts = {
    entries: ['./main.js'],
    debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

gulp.task('js', bundle);
b.on('update', bundle);
b.on('log', gutil.log);

function bundle() {
    return b.bundle()
        .on('error', gutil.log.bind(gutil,'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
}

//* a simple watch task
gulp.task('watch', function() {
    gulp.watch('scripts/*.{js, coffee}', ['scripts']);
});



// Here's what a basic image processing task might look like:var imagemin   = require('gulp-imagemin');

gulp.task('images', function(){
    return gulp.src('./src/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
});



/*some related sources
https://github.com/gulpjs/gulp/blob/master/docs/README.md#articles
https://github.com/substack/stream-handbook

https://youtu.be/DkRoa2LooNM?list=PLRk95HPmOM6PN-G1xyKj9q6ap_dc9Yckm


Awesome video! How did you create files so fast!
Reply  ·

Maximilian Schmitt4 months ago

Thanks Jesse! It's a plugin for Sublime Text called "Advanced New File".
Reply  ·  1

Maximilian Schmitt4 months ago

Actually, it looks like I'm using Atom in that video. So that will be the "Fancy New File"-plugin for that.
*/
