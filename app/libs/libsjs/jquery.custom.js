jQuery(window).load(function($){'use strict';if(document.getElementById("pageloader")){jQuery(".mid").delay(0).fadeOut();jQuery(".outter").delay(0).fadeOut();jQuery("#pageloader").delay(300).fadeOut("slow");}jQuery("#pageloader").delay(300).fadeOut("slow");jQuery('.nav-menu .menu-item-has-children').hover(function(){jQuery(this).find('.dropdown-menu').first().stop(true,true).fadeIn(250);},function(){jQuery(this).find('.dropdown-menu').first().stop(true,true).fadeOut(250)});jQuery('a.dropdown-toggle, .dropdown-menu a').bind('touchstart',function(){var href=jQuery(this).attr('href');location.href=href;})
jQuery('body').on('touchstart.dropdown','.dropdown-menu, .work-image',function(e){e.stopPropagation();});jQuery('.fullscreen-slider , .p-section').superslides({play:12000,animation:'fade',inherit_height_from:window,});jQuery('#project').superslides({play:8000,animation:'fade',inherit_width_from:window,inherit_height_from:window,});jQuery('.v1 .text-slider').flexslider({animation:"slide",selector:"ul.home-texts li.slide",controlNav:false,directionNav:true,touch:true,slideshowSpeed:5000,direction:"vertical",start:function(slider){jQuery('body').removeClass('loading');}});jQuery('.v2 .text-slider').flexslider({animation:"fade",selector:"ul.home-texts li.slide",controlNav:false,directionNav:true,animationSpeed:500,slideshowSpeed:5000,direction:"vertical",start:function(slider){jQuery('body').removeClass('loading');}});jQuery('.mp-image').each(function(){jQuery(this).magnificPopup({type:'image'});});jQuery('.mp-video, mp-map').each(function(){jQuery(this).magnificPopup({type:'iframe'});});jQuery('.mp-gallery').each(function(){jQuery(this).magnificPopup({delegate:'a',type:'image',gallery:{enabled:true}});});jQuery("a[data-rel^='prettyPhoto']").each(function(){jQuery(this).prettyPhoto({theme:"light_square",default_width:700,default_height:400,});});jQuery(".fitvid").fitVids();jQuery('.custom_slider').flexslider({animation:"fade",selector:".image_slider .slide",controlNav:true,directionNav:true,animationSpeed:500,slideshowSpeed:5000,pauseOnHover:true,direction:"vertical",start:function(slider){jQuery('body').removeClass('loading');}});jQuery('.inner-portfolio .text-slider').flexslider({animation:"fade",selector:"ul.texts li.slide",controlNav:false,directionNav:true,slideshowSpeed:5000,direction:"vertical",start:function(slider){jQuery('body').removeClass('loading');}});jQuery('.inner-portfolio .circle-image-slider').flexslider({animation:"fade",selector:"ul.circle-slider li.slide",controlNav:false,directionNav:true,slideshowSpeed:5000,direction:"vertical",start:function(slider){jQuery('body').removeClass('loading');}});jQuery(".home-boxes").owlCarousel({items:3,itemsDesktop:[1169,3],itemsDesktopSmall:[979,2],itemsTablet:[600,1],itemsTabletSmall:false,itemsMobile:[560,1],slideSpeed:400});jQuery(".team-boxes").owlCarousel({items:4,responsive:{0:{items:1},640:{items:2},1024:{items:3},1169:{items:4}},slideSpeed:400});jQuery('.member-detail-button').on("touchend",function(){var target=jQuery(this).data('target');jQuery(target).addClass('in').css({'display':'block','opacity':'1'});});jQuery('.modal-head .close').on("touchend",function(){var target=jQuery(this).closest('.modal').attr('id');jQuery('#'+target).removeClass('in').css({'display':'none','opacity':'0'});});jQuery(".clients").owlCarousel({items:3,itemsTabletSmall:false,responsive:{0:{items:1},768:{items:2},979:{items:3}},nav:false,dots:true,autoplay:true,autoplayTimeout:5000,});jQuery(".logos").owlCarousel({items:5,responsive:{0:{items:1},768:{items:2},979:{items:3},1169:{items:4}},autoPlay:8000,slideSpeed:400});jQuery(".vntd-portfolio-carousel .works").owlCarousel({items:4,responsive:{0:{items:1},960:{items:2},1100:{items:3},1169:{items:4}},pagination:false,navigation:true,mouseDrag:false,stopOnHover:true,slideSpeed:700,paginationSpeed:900,rewindSpeed:1100});jQuery(".home .service-boxes").owlCarousel({animateOut:'fadeOut',animateIn:'fadeIn',items:1,smartSpeed:850,loop:true,mouseDrag:false,touchDrag:false,autoplay:true,autoplayTimeout:5000,autoplayHoverPause:false,dots:false,margin:0});jQuery(".service-boxes").owlCarousel({items:4,responsive:{0:{items:1},768:{items:2},979:{items:3},1169:{items:4}},responsiveClass:true,dots:false,nav:true,mouseDrag:true,navText:"",loop:true,autoplay:true,autoplayTimeout:5000,autoplayHoverPause:false});jQuery(".player").each(function(){jQuery(this).mb_YTPlayer();});jQuery('.testimonials').flexslider({animation:"fade",selector:"ul.text-slider li.text",controlNav:false,directionNav:true,slideshowSpeed:5000,start:function(slider){jQuery('body').removeClass('loading');}});var $wpAdminBar=jQuery('#wpadminbar');if($wpAdminBar.length){jQuery("#navigation-sticky").sticky({topSpacing:$wpAdminBar.height()});}else{jQuery("#navigation-sticky").sticky({topSpacing:0});}jQuery('.nav-menu a,.scroll,.ex-link a,a.ex-link,.slide-button,.page-numbers').bind('click',function(event){if(jQuery(this).hasClass('ex-link')&&document.getElementById("pageloader")||jQuery(this).closest('li').hasClass('ex-link')&&document.getElementById("pageloader")){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){jQuery('.mbYTP_wrapper').addClass('mobile-bg');jQuery('section , div').addClass('b-scroll');jQuery('.animated').addClass('visible');}else{var Exlink=this.getAttribute('href');jQuery('#pageloader').fadeIn(350,function(){jQuery(".mid").fadeIn();jQuery(".outter").fadeIn();document.location.href=Exlink;});return false;}return false;}var $anchor=jQuery(this);var headerH=jQuery('#navigation, #navigation-sticky').outerHeight();jQuery('html,body').stop().animate({scrollTop:jQuery($anchor.attr('href')).offset().top-headerH+"px"},1200,'easeInOutExpo');event.preventDefault();});var menu=jQuery('#navigation');jQuery(window).scroll(function(){var y=jQuery(this).scrollTop();var homeH,z,homeHOffset;homeH=homeHOffset=0;if(document.getElementById("first")){homeH=jQuery('#first').outerHeight();homeHOffset=jQuery('#first').offset().top;}var headerH=jQuery('#navigation').outerHeight();z=homeHOffset+homeH-headerH;if(y>=z){menu.removeClass('first-nav').addClass('second-nav');}else{menu.removeClass('second-nav').addClass('first-nav');}});jQuery("#back-top").hide();jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>500){jQuery('#back-top').fadeIn();}else{jQuery('#back-top').fadeOut();}});var $containerFirst=jQuery('.w-items');$containerFirst.isotope({resizable:false,itemSelector:'.w-item',hiddenStyle:{opacity:0,},visibleStyle:{opacity:1,},transformsEnabled:false,});var $optionSets=jQuery('#w-options .w-option-set'),$optionLinks=$optionSets.find('a');var first_tab=jQuery('#w-options .w-option-set li:first-child a').attr('data-option-value');$containerFirst.isotope({filter:first_tab});$optionLinks.click(function(){var $this=jQuery(this);if($this.hasClass('selected')){return false;}var $optionSet=$this.parents('.w-option-set');$optionSet.find('.selected').removeClass('selected');$this.addClass('selected');var options={},key=$optionSet.attr('data-option-key'),value=$this.attr('data-option-value');value=value==='false'?false:value;options[key]=value;if(key==='layoutMode'&&typeof changeLayoutMode==='function'){changeLayoutMode($this,options)}else{$containerFirst.isotope(options);}return false;});var $container=jQuery('.portfolio-items');$container.isotope({itemSelector:'.item'});var $optionSets=jQuery('#options .option-set'),$optionLinks=$optionSets.find('a');$optionLinks.click(function(){var $this=jQuery(this);if($this.hasClass('selected')){return false;}var $optionSet=$this.parents('.option-set');$optionSet.find('.selected').removeClass('selected');$this.addClass('selected');var options={},key=$optionSet.attr('data-option-key'),value=$this.attr('data-option-value');value=value==='false'?false:value;options[key]=value;if(key==='layoutMode'&&typeof changeLayoutMode==='function'){changeLayoutMode($this,options)}else{$container.isotope(options);}return false;});});(function($){'use strict';jQuery(document).ready(function(){jQuery('.panel-group .panel:first-child').find('.panel-collapse').addClass('in');jQuery('.tab-content  .tab-pane:first-child').addClass('active in');jQuery(window).bind('load',function(){parallaxInit();});function parallaxInit(){testMobile=isMobile.any();if(testMobile==null){jQuery('body .parallax').each(function(){jQuery(this).parallax("50%",0.5);});}}parallaxInit();});var testMobile;var isMobile={Android:function(){return navigator.userAgent.match(/Android/i);},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i);},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera:function(){return navigator.userAgent.match(/Opera Mini/i);},Windows:function(){return navigator.userAgent.match(/IEMobile/i);},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows());}};}(jQuery));jQuery(function(){jQuery(".fact").appear(function(){jQuery('.fact').each(function(){dataperc=jQuery(this).attr('data-perc'),jQuery(this).find('.factor').delay(6000).countTo({from:0,to:dataperc,speed:3000,refreshInterval:50,});});});});(function($){$.fn.countTo=function(options){options=$.extend({},$.fn.countTo.defaults,options||{});var loops=Math.ceil(options.speed/options.refreshInterval),increment=(options.to-options.from)/loops;return jQuery(this).each(function(){var _this=this,loopCount=0,value=options.from,interval=setInterval(updateTimer,options.refreshInterval);function updateTimer(){value+=increment;loopCount++;jQuery(_this).html(value.toFixed(options.decimals));if(typeof(options.onUpdate)=='function'){options.onUpdate.call(_this,value);}if(loopCount>=loops){clearInterval(interval);value=options.to;if(typeof(options.onComplete)=='function'){options.onComplete.call(_this,value);}}}});};$.fn.countTo.defaults={from:0,to:100,speed:1000,refreshInterval:100,decimals:0,onUpdate:null,onComplete:null,};})(jQuery);jQuery(window).load(function(){jQuery('.progress-bar').appear(function(){datavl=jQuery(this).attr('data-value'),jQuery(this).animate({"width":datavl+"%"},'300');});jQuery('.modal-right .progress-bar').each(function(){datavl=jQuery(this).attr('data-value'),jQuery(this).animate({"width":datavl+"%"},'300');});});jQuery(window).bind("load",function(){setTimeout(updateScrollSpy,1000);});function updateScrollSpy(){jQuery('body').scrollspy({target:'.nav-menu',offset:95});}jQuery(window).load(function(){'use strict';if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){jQuery('.mbYTP_wrapper').addClass('mobile-bg');jQuery('section , div').addClass('b-scroll');jQuery('.animated').addClass('visible');}else{if(jQuery.browser.mozilla){}else if(jQuery.browser.safari){}else{}jQuery('.animated,.wpb_animate_when_almost_visible').appear(function(){var elem=jQuery(this);var animation=elem.data('animation');if(!animation){animation='fadeInLeft';}if(!elem.hasClass('visible')){var animationDelay=elem.data('animation-delay');if(animationDelay){setTimeout(function(){elem.addClass(animation+" visible");},animationDelay);}else{setTimeout(function(){elem.addClass(animation+" visible");},300);}}});}});jQuery(document).ready(function(){jQuery(".mobile-nav-button").bind('click',function(){jQuery(".nav-inner div.nav-menu").slideToggle("medium",function(){});});jQuery('.nav-inner div.nav-menu ul.nav li a').click(function(){if(jQuery(window).width()<1000){jQuery(".nav-menu").slideToggle("2000")}});});