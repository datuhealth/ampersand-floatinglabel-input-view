var AmpersandView = require( 'ampersand-view' ),
    AmpersandForm = require( 'ampersand-form-view' ),
    Input = require('ampersand-input-view'),
    FloatingInput = require( '../ampersand-floatinglabel-input-view' ),
    domready = require('domready'),
    view;

var DemoView = AmpersandView.extend({
    template: [
        '<div>',
            '<form method="POST" action="/login" role="form" data-target="form">',
                '<div data-hook="floatme"></div>',
            '</form>',
        '</div>'
    ].join(''),
    render: function() {
        'use strict';
        view = this;

        this.renderWithTemplate();

        this.form = new AmpersandForm({
            autoAppend: false,
            el: this.query( 'form' ),
            submitCallback: function( data ) {
                console.log( 'here\'s your data!:' );
                console.dir( data );
            },
            validCallback: function( data ) {
                console.log( "am i valid form?: " + data );
            },
            fields: [
                new FloatingInput({
                    template: [
                        '<div class="float-container">',
                            '<input class="bottom form-input">',
                            '<div class="floating-label div-table" data-hook="label-container">',
                                '<div class="div-row">',
                                    '<span class="label div-cell" data-hook="label"></span>',
                                    '<span class="div-cell message message-error" data-hook="message-container message-text"></span>',
                                '</div>',
                            '</div>',
                        '</div>'
                    ].join(''),
                    labelClass: 'floating',
                    el: view.queryByHook('floatme'),
                    type: 'email',
                    name: 'email',
                    label: 'Email',
                    placeholder: 'Email',
                    required: false,
                    tests: [
                        function( val ) {
                            if ( val.length < 5 ) {
                                return 'Your email must be at least 5 characters';
                            }
                        }
                    ]
                })
                // new FloatingInput({
                //     el: view.queryByHook('floatme'),
                //     name: 'test',
                //     label: 'Test label',
                //     value: 'Test value'
                // })
            ]
        });

        this.registerSubview( this.form );
    }
});

domready(function() {
    var demoView = new DemoView({
        el: window.document.getElementById('target')
    });
    demoView.render();
    view.form._fieldViewsArray[0].render()
});
