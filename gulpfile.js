var gulp = require( 'gulp' ),
    logwarn = require( 'gulp-logwarn' ),
    jshint = require( 'gulp-jshint' ),
    jscs = require( 'gulp-jscs' );

gulp.task( 'jscs', function scriptsJSCSTask() {
    'use strict';

    return gulp.src( './ampersand-floatinglabel-input-view.js' )
        .pipe( jscs());
});

gulp.task( 'jshint', function scriptsJSHintTask() {
    'use strict';

    return gulp.src( './ampersand-floatinglabel-input-view.js' )
        .pipe( jshint())
        .pipe( jshint.reporter( 'default' ))
        .pipe( jshint.reporter( 'fail' ));
});

gulp.task( 'logwarn', function scriptsLogwarnTask() {
    'use strict';

    return gulp.src( './ampersand-floatinglabel-input-view.js' )
        .pipe( logwarn([
            'console.log',
            'console.error',
            'console.info',
            'debugger'
        ]));
});

gulp.task( 'default', [ 'jscs', 'jshint', 'logwarn' ]);

gulp.task( 'test', [ 'jscs', 'jshint', 'logwarn' ]);
