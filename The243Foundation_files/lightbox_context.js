function nextgen_lightbox_filter_selector($, selector) 
{
		if (nextgen_lightbox_settings && nextgen_lightbox_settings.context) {
			var context = nextgen_lightbox_settings.context;
			
			if (context == 'all_images') {
				 selector = selector.add($('a > img').parent());
			}
			else if (context == 'all_images_direct') {
				selector = selector.add($('a[href] > img').parent()
				 		.filter(function() {
							var href = $(this).attr('href').toLowerCase();
							var ext = href.substring(href.length - 3);
							var ext2 = href.substring(href.length - 4);
							
							return (ext == 'jpg' || ext == 'gif' || ext == 'png' || ext2 == 'tiff' || ext2 == 'jpeg');
						}));
			}
			else if (context == 'nextgen_and_wp_images') {
				 selector = selector.add($('a > img[class*="wp-image-"]').parent());
			}
			
			selector = selector.not('.gallery_link');
		}
		
		return selector;
}

/*
     FILE ARCHIVED ON 13:11:36 Apr 03, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:44:03 Dec 02, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/