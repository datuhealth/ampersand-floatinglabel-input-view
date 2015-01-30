var AmpersandInputView = require( 'ampersand-input-view' );

module.exports = AmpersandInputView.extend({
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
