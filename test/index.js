var chai = require( 'chai' ),
    InputView = require( '../ampersand-floatinglabel-input-view' ),
    expect = chai.expect;

describe( 'The input view', function() {
    it( 'should be rendered', function() {
        var input = new InputView({
            name: 'test',
            label: 'Test label'
        });

        input.render();

        expect( input.el.tagName ).to.equal( 'LABEL' );
    });

    it( 'should have a label', function() {
        var input = new InputView({
            name: 'test',
            label: 'Test label'
        });

        input.render();

        expect( input.el.querySelector( '[data-hook="label"]' ).innerText ).to.equal( 'Test label' );
    });

    it( 'should not be floating without an initial value', function() {
        var input = new InputView({
            name: 'test',
            label: 'Test label'
        });

        input.render();

        expect( input.el.querySelector( '[data-hook="label"]' ).classList.contains( 'floating' )).to.equal( false );
    });

    it( 'should be floating with an initial value', function() {
        var input = new InputView({
            name: 'test',
            label: 'Test label',
            value: 'Test value'
        });

        input.render();

        expect( input.el.querySelector( '[data-hook="label"]' ).classList.contains( 'floating' )).to.equal( true );
    });

    it( 'should be alt-floating with an initial value', function() {
        var input = new InputView({
            name: 'test',
            label: 'Test label',
            value: 'Test value',
            labelClass: 'floating alt-floating'
        });

        input.render();

        expect( input.el.querySelector( '[data-hook="label"]' ).classList.contains( 'floating' )).to.equal( true );
        expect( input.el.querySelector( '[data-hook="label"]' ).classList.contains( 'alt-floating' )).to.equal( true );

    });

    it( 'should be floating when a user enters a value', function() {
        var input = new InputView({
            name: 'test',
            label: 'Test label',
            value: ''
        });

        input.render();

        expect( input.el.querySelector( '[data-hook="label"]' ).classList.contains( 'floating' )).to.equal( false );

        input.setValue( 'Test value' );

        expect( input.el.querySelector( '[data-hook="label"]' ).classList.contains( 'floating' )).to.equal( true );
    });

    it( 'should not be floating when a user removes the value if originally empty', function() {
        var input = new InputView({
            name: 'test',
            label: 'Test label',
            value: 'Test label'
        });

        input.render();

        expect( input.el.querySelector( '[data-hook="label"]' ).classList.contains( 'floating' )).to.equal( true );

        input.setValue( '' );

        expect( input.el.querySelector( '[data-hook="label"]' ).classList.contains( 'floating' )).to.equal( false );
    });

    it( 'should have an input-invalid class on the label', function() {
        var input = new InputView({
            name: 'test',
            label: 'Test label',
            value: '',
            tests: [
                function( val ) {
                    if ( val.length < 5 ) {
                        return "Your input must be longer";
                    }
                }
            ]
        });

        input.render();

        expect( input.el.querySelector( '[data-hook="label"]' ).classList.contains( 'input-invalid' )).to.equal( false );

        input.setValue( 'test' );
        input.handleInputChanged();
        input.handleChange();

        expect( input.el.querySelector( '[data-hook="label"]' ).classList.contains( 'input-invalid' )).to.equal( true );
    });

    it( 'should have an input-invalid class on the input', function() {
        var input = new InputView({
            name: 'test',
            label: 'Test label',
            value: '',
            tests: [
                function( val ) {
                    if ( val.length < 5 ) {
                        return "Your input must be longer";
                    }
                }
            ]
        });

        input.render();

        expect( input.el.querySelector( 'input' ).classList.contains( 'input-invalid' )).to.equal( false );

        input.setValue( 'test' );
        input.handleInputChanged();
        input.handleChange();

        expect( input.el.querySelector( 'input' ).classList.contains( 'input-invalid' )).to.equal( true );
    });
});
