var AmpersandInputView = require( 'ampersand-input-view' ),
    extend = require( 'amp-extend' );

module.exports = AmpersandInputView.extend({
    bindings: extend( AmpersandInputView.prototype.bindings, {
        validityClass: [
            {
                type: 'class',
                selector: 'input, textarea'
            },
            {
                type: 'class',
                hook: 'label'
            }
        ]
    }),
    initialize: function( options ) {
        "use strict";
        options = options || {};

        if ( options.labelClass ) {
            this.labelClass = options.labelClass.split( ' ' );
        } else {
            this.labelClass = [ 'floating' ];
        }

        AmpersandInputView.prototype.initialize.apply( this, arguments );
    },
    render: function() {
        'use strict';

        AmpersandInputView.prototype.render.apply( this, arguments );

        this.on( 'change:value', this.checkLabel );

        this.labelEl = this.queryByHook( 'label' );
        this.labelContainer = this.queryByHook( 'label-container' );

        this.checkLabel();
    },
    checkLabel: function() {
        'use strict';
        var self = this,
            action;

        // Float the label up if there is input text, or, if the warning message
        // must be displayed (adjacent to label)
        if ( this.input.value || (this.shouldValidate && !this.valid) ) {
            action = 'add';
        } else {
            action = 'remove';
        }

        this.labelClass.forEach(function( cls ) {
            if ( self.labelContainer ) {
                self.labelContainer.classList[action]( cls );
            } else {
                self.labelEl.classList[action]( cls );
            }
        });
    }
});
