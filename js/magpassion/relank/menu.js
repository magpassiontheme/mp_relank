/**
 * MagPassion_Ajaxbookmarks extension
 * 
 * @category   	MagPassion
 * @package		MagPassion_Ajaxbookmarks
 * @copyright  	Copyright (c) 2014 by MagPassion (http://magpassion.com)
 * @license	http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

	jQuery(function() {
            jQuery('#nav ul').addClass('dropdown-menu');
            jQuery('#nav > li.parent').addClass('dropdown');
            jQuery('#nav > li.parent').hover(
                function () {
                    jQuery(this).addClass('open');
                },
                function () {
                    jQuery(this).removeClass('open');
                }
            );
            jQuery('#nav li.parent a.level-top').append('<b class="caret"></b>');
            jQuery('#main-top-menu li.level-top').hover(
            function () {
                var w_window = jQuery("#mp_nav_wrap .container").width();
                var w_child = jQuery(this).find('ul').width();
                var off = jQuery(this).position();
                var off_left = off.left;
                if((off_left + w_child)>w_window){
                    jQuery(this).find('ul').css('left', 'auto').css('right','0');
                }
                jQuery(this).addClass('cart-active').find('ul').stop().delay(200).slideDown();
            },
            function () {
                jQuery(this).removeClass('cart-active').find('ul').stop().delay(200).slideUp();
            }
         ); 
    });

	function mp_showmobilemenu(){
			
	}
	
	jQuery(function() {
        //jQuery("#mp_nav_wrap").sticky({ topSpacing: 0 });
        //jQuery("img").Lazy();
        var mp_menu = '<ul>'+ jQuery('#nav').html() + '</ul>';
        jQuery('#mp_mobile_menu').append(mp_menu);
        jQuery("#mp_mobile_menu li.parent").prepend('<div class="mp_colapse"></div>');
        jQuery(".mp_tooglemenu").click(function(){
            var doc_height = jQuery( document ).height()
            
            jQuery("#mp_mobile_sidebar").animate({"left":"0px"}, "fast");
            jQuery(".page").animate({"left":"250px"}, "fast");
            jQuery('#mp_overlay').show();
            /*var hidden = jQuery('#mp_nav_wrap');
            if (hidden.hasClass('visible')){
                hidden.animate({"left":"-10000px"}, "fast").removeClass('visible');
                hidden.find("div.abc").remove();
            } else {
                hidden.animate({"left":"0px"}, "fast").addClass('visible');
                jQuery("#main-top-menu").removeClass("pronav").addClass("mp_mobile_acc");
                jQuery("#main-top-menu li.level-top").prepend('<div class="mp_colapse">colap</div>');
                hidden.prepend('<div class="abc" style="float: left;display: block;width:15px;height: 80px;background: #444444">abcab</div>');
            }*/
        }); 
         jQuery(".toogle_sidebar").click(function(){
            jQuery("#mp_mobile_menu").animate({"left":"0px"}, "fast");
            jQuery("#mp_pagewraper_inner").animate({"left":"250px"}, "fast");
            jQuery("#mp_overlay").animate({"left":"250px"}, "fast");
            jQuery('#mp_overlay').show();
            /*var hidden = jQuery('#mp_nav_wrap');
            if (hidden.hasClass('visible')){
                hidden.animate({"left":"-10000px"}, "fast").removeClass('visible');
                hidden.find("div.abc").remove();
            } else {
                hidden.animate({"left":"0px"}, "fast").addClass('visible');
                jQuery("#main-top-menu").removeClass("pronav").addClass("mp_mobile_acc");
                jQuery("#main-top-menu li.level-top").prepend('<div class="mp_colapse">colap</div>');
                hidden.prepend('<div class="abc" style="float: left;display: block;width:15px;height: 80px;background: #444444">abcab</div>');
            }*/
        });
        
       
        jQuery('#mp_nav_wrap').on('click', '.abc', function() {
            
            if (jQuery('#mp_nav_wrap').hasClass('visible')){
                jQuery('#mp_nav_wrap').animate({"left":"-250px"}, "fast").removeClass('visible');
                //hidden.find("div.abc").remove();
            } else {
                jQuery('#mp_nav_wrap').animate({"left":"0px"}, "fast").addClass('visible');
                jQuery("#main-top-menu").removeClass("pronav").addClass("mp_mobile_acc");
                //hidden.prepend('<div class="abc" style="float: left;display: block;width:15px;height: 80px;background: #444444">abcab</div>');
            }
        }); 
        jQuery('#mp_mobile_sidebar').on('click', '.mp_colapse', function() {
            jQuery(this).parent( "li.level-top").find("ul").toggle();
            if (jQuery(this).hasClass('active')){
                jQuery(this).removeClass('active');
            }
            else {
                jQuery(this).addClass('active');
            }
        }); 
        var doc_height = jQuery( document ).height()
        jQuery('#mp_mobile_sidebar').height(doc_height);
        jQuery('#mp_overlay').height(doc_height);
        
        
        jQuery('#mp_overlay').click(function(){
                jQuery("#mp_mobile_menu").animate({"left":"-250px"}, "fast");
                jQuery("#mp_pagewraper_inner").animate({"left":"0px"}, "fast");
                jQuery(this).animate({"left":"0px"}, "fast");
                jQuery(this).hide();
        });
        
        /*jQuery(window).resize(function(){
            var mainWidth = jQuery(window).width();
            if(mainWidth < 767){
               jQuery('#mp_nav_wrap').addClass('mobile_menu');
               jQuery('#mp_nav_wrap').find('.vnznav').addClass('col-xs-12');
               jQuery('#main-top-menu').removeClass('pronav');
            }
            else {
                jQuery('#mp_nav_wrap').removeClass('mobile_menu');
                 jQuery('#mp_nav_wrap').find('.vnznav').removeClass('col-xs-12');
                 jQuery('#main-top-menu').addClass('pronav');
            }
        });*/ 
       
    });

