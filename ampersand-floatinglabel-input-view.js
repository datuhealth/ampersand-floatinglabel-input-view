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
    render: function() {
        'use strict';

        AmpersandInputView.prototype.render.call( this, arguments );

        this.on( 'change:value', this.checkLabel );

        this.labelEl = this.queryByHook( 'label' );

        this.checkLabel();
    },
    checkLabel: function() {
        'use strict';

        if ( this.input.value ) {
            this.labelEl.classList.add( 'floating' );
        } else {
            this.labelEl.classList.remove( 'floating' );
        }
    }
});
