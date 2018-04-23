/*
 * Bones Scripts File
 * Author: Eddie Machado
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
*/


/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y }
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;
/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {

		// <![CDATA[
			$(window).load(function() { $("#spinner").fadeOut("slow"); })
		// ]]>

		// Mobile Navigation

			$('#menu-main-menu').slimmenu(
		{
		    resizeWidth: '1014',
		    collapserTitle: 'Main Menu',
		    animSpeed: 'medium',
		    easingEffect: null,
		    indentChildren: false,
		    childrenIndenter: '&nbsp;'
		});	
		
		// Nivio Slider

		   $(window).load(function() {
		        $('#slider').nivoSlider();
		    });	

		   /* To add multiple sliders on a page, you will need to define them here with a different name. Make sure to change the name in your slider's HTML.*/

		   $(window).load(function() {
		        $('#slider2').nivoSlider();
		    });			

		// Nivio Lightbox   

	    $(document).ready(function(){
		    $('a.light').nivoLightbox();
		});	

		//

		// jQuery Tabs - Jack Moore
	
		$('ul.tabs').each(function(){
		    // For each set of tabs, we want to keep track of
		    // which tab is active and it's associated content
		    var $active, $content, $links = $(this).find('a');

		    // If the location.hash matches one of the links, use that as the active tab.
		    // If no match is found, use the first link as the initial active tab.
		    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		    $active.addClass('active');

		    $content = $($active[0].hash);

		    // Hide the remaining content
		    $links.not($active).each(function () {
		      $(this.hash).hide();
		    });

		    // Bind the click event handler
		    $(this).on('click', 'a', function(e){
		      // Make the old tab inactive.
		      $active.removeClass('active');
		      $content.hide();

		      // Update the variables with the new link and content
		      $active = $(this);
		      $content = $(this.hash);

		      // Make the tab active.
		      $active.addClass('active');
		      $content.show();

		      // Prevent the anchor's default click action
		      e.preventDefault();
		    });
	  	});	

	  	// jCarousel	 

			$(function() {
			    $('.jcarousel').jcarousel({
			    });
			});


}); /* end of as page load scripts */
