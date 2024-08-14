import { UIPanel, UIRow } from './libs/ui.js';

function MenubarHelp( editor ) {

	const strings = editor.strings;

	const container = new UIPanel();
	container.setClass( 'menu' );

	const title = new UIPanel();
	title.setClass( 'title' );
	title.setTextContent( strings.getKey( 'menubar/help' ) );
	container.add( title );

	const options = new UIPanel();
	options.setClass( 'options' );
	container.add( options );

	// Source code

	let option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/help/source_code' ) );
	option.onClick( function () {

		window.open( 'https://github.com/Sectonidse/thrEDIT/tree/main', '_blank' );

	} );
	options.add( option );

	/*
	// Icon

	let option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/help/icons' ) );
	option.onClick( function () {

		alert("thrEDIT version 0.2. Copyright © 2010-2024 three.js authors, Copyright © 2024 Secton");

	} );
	options.add( option );
	*/

	// About

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/help/about' ) );
	option.onClick( function () {

		alert("thrEDIT version 0.2. Copyright © 2010-2024 three.js authors, Copyright © 2024 Secton");

	} );
	options.add( option );

	// Manual

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/help/docs' ) );
	option.onClick( function () {

		window.open( 'https://github.com/mrdoob/three.js/wiki/Editor-Manual', '_blank' );

	} );
	options.add( option );

	return container;

}

export { MenubarHelp };
