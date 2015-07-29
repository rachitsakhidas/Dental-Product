/**/
/* on load event */
/**/
"use strict";
jQuery(document).ready( function (){

	jQuery('#tuner-switcher').on('click', function()
	{
		jQuery('#tuner').toggleClass('tuner-visible');
	});

	jQuery('#tuner').on('click', '.colors li', function()
	{
		jQuery(this).addClass('active').siblings().removeClass('active');
		jQuery('head').append('<link rel="stylesheet" href="/wp-content/themes/clinico/css/color-' + jQuery(this).data('color') + '.css">');
	});

	jQuery('#tuner').on('click', '.layouts li', function()
	{
		if( jQuery(this).data('layout') == 'boxed' )
			if ( !jQuery( "body" ).children( ".page_boxed" ).length ){
				jQuery( "body>*" ).wrapAll( "<div class='page_boxed'></div>" );
				jQuery( "body" ).addClass('boxed').removeClass('wide');
				jQuery( this ).addClass( 'active' );
				jQuery( "ul.layouts li" ).html( "On" );
			}
		else
			if ( jQuery( "body" ).children( ".page_boxed" ).length ){
				jQuery( "body" ).addClass('wide').removeClass('boxed');
				jQuery( "body>.page_boxed>*" ).unwrap();
				jQuery( this ).removeClass( 'active' );
				jQuery( "ul.layouts li" ).html( "Off" );
			}
	});

	jQuery('#tuner').on('click', '.background li', function()
	{
		jQuery(this).addClass('active').siblings().removeClass('active');
		jQuery('body').css('background-image', 'url(/wp-content/themes/clinico-child/tuner/slides/' + jQuery(this).data('color') + '.jpg)');
	});
});