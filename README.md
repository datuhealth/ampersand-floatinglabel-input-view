# UNMAINTAINED

This project is no longer being maintained. It's suggested that an alternative be used instead.

# ampersand-floatinglabel-input-view

A simple ampersand input view extension to enable the [floating label pattern](http://bradfrost.com/blog/post/float-label-pattern/).

This extension will:

- Dynamically provide a `floating` class on the `[data-hook="label"]` element for styling a floating label.  Overridable by supplying option `labelClass: 'your other classes'`
- Check if the input already has a value and float the label
- Check if the input has a value as the user types and dynamically float the label

It's build right on top of [ampersand-input-view](https://github.com/ampersandjs/ampersand-input-view) so you can use it just like [ampersand-input-view](https://github.com/ampersandjs/ampersand-input-view).

## install

```
npm install ampersand-floatinglabel-input-view
```

## example

```
var AmpersandView = require( 'ampersand-view' ),
    AmpersandForm = require( 'ampersand-form-view' ),
    AmpersandInput = require( 'ampersand-floatinglabel-input-view' );

module.exports = AmpersandView.extend({
    template: '<div><form method="POST" action="/login" role="form" data-target="form"></form></div>',
    render: function() {
        'use strict';

        this.renderWithTemplate();

        this.loginForm = new AmpersandForm({
            el: this.queryByHook( 'login-form' ),
            submitCallback: function( data ) {
                // send data to the server
            },
            validCallback: function( data ) {
                // make the button visible
            },
            fields: [
                new AmpersandInput({
                    type: 'email',
                    name: 'email',
                    label: 'Email',
                    placeholder: 'Email',
                    value: '',
                    tests: [
                        function( val ) {
                            if ( val.length < 5 ) {
                                return 'Your email must be at least 5 characters';
                            }
                        }
                    ]
                }),
                new AmpersandInput({
                    type: 'password',
                    name: 'password',
                    label: 'Password',
                    placeholder: 'Password',
                    value: '',
                    tests: [
                        function( val ) {
                            if ( val.length < 8 ) {
                                return 'Your password must be at least 8 characters';
                            }
                        }
                    ]
                })
            ]
        });

        this.registerSubview( this.loginForm );
    }
});
```

## API reference

### options
Options are passed into the ViewConstructor

`labelClass` - [*default: 'floating'*], applies 'yourClass' or 'yourClass andYourOtherClassToo' to data-hooked `label` element

`template` - standard View convention applies.  However, if attribute `data-hook="label-container"` is found, `labelClass` will be applied to it instead of `data-hook="label"`

See [ampersand-input-view](https://github.com/ampersandjs/ampersand-input-view#api-reference) for the api reference.

## changelog

- 1.5.0 - Dependency updates (ampersand-view)
- 1.4.0 - Dependency updates
- 1.3.0 - Dependency updates
- 1.2.0 - Dependency updates
- 1.1.3 - Dependency updates
- 1.1.2 - Dependency updates
- 1.1.1 - Adds ampersand-view-conventions to the tests
- 1.1.0 - Permit overridable class(es) for label.  Add demo.  Rev input version req
- 1.0.0 - Added tests to make sure everything worked well
- 0.2.0 - Added input-invalid class to the label when the input is invalid
- 0.1.0 - Initial release to github/npm

## license

[Apache 2.0]( LICENSE.md )
