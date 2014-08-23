(function($) {
  "use strict";
  
  jQuery(document).ready(function(jQuery) {

     jQuery(function(){
        jQuery(".serch_bar").click(function(){
          jQuery(".search_box").toggle("slow");

        });
      });

      jQuery(window ).scroll(function() {
          var scrollpos = jQuery(window).scrollTop();
             
          if(scrollpos>50){
            jQuery('.header_wrap').removeClass('negative');  
            jQuery('.header_wrap').addClass('positive');  
            jQuery('.slider_menu').css('display','none');
          }else{  
            jQuery('.header_wrap').removeClass('positive');
            jQuery('.header_wrap').addClass('negative');  
            jQuery('.slider_menu').css('display','block');
          }  
      });

      /*Team Member 1st*/
      jQuery(function(){
        jQuery(".view_icon1").click(function(){
          jQuery(".member_description1").toggle("slow");

        });
      }); 

      jQuery( ".view_icon1" ).click(function() {
      jQuery( this ).toggleClass( "highlight" );
      });

      /*Team Member 1st*/
      jQuery(function(){
        jQuery(".view_icon2").click(function(){
          jQuery(".member_description2").toggle("slow");

        });
      }); 

      jQuery( ".view_icon2" ).click(function() {
      jQuery( this ).toggleClass( "highlight" );
      });

      /*Team Member 1st*/
      jQuery(function(){
        jQuery(".view_icon3").click(function(){
          jQuery(".member_description3").toggle("slow");

        });
      }); 

      jQuery( ".view_icon3" ).click(function() {
      jQuery( this ).toggleClass( "highlight" );
      });
  /*-----------------------------------------------------------------------------------*/
  /*             jQurey UI
  /*-----------------------------------------------------------------------------------*/

        jQuery( ".accordion" ).accordion({
            collapsible: false,
            active: false,
            heightStyle: false
        }); 

        jQuery( ".accordion-close" ).accordion({
            collapsible: true,
            active: false,
            heightStyle: false
        }); 
        
        jQuery( document ).tooltip({
          position: {
            my: "center bottom-20",
            at: "center top",
            using: function( position, feedback ) {
              jQuery( this ).css( position );
              jQuery( "<div>" )
                .addClass( "arrow" )
                .addClass( feedback.vertical )
                .addClass( feedback.horizontal )
                .appendTo( this );
            }
          }
        }); 

        jQuery(".tabs").tabs( { fx: { height: 'toggle', opacity: 'toggle' } } );

        jQuery('.main-menu').superfish({
          speed   : 'slow',
          animation:   {opacity:'show',height:'show'}
          
        });

        jQuery( "#vtabs2" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
        jQuery( "#vtabs2 li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

        jQuery( "#vtabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
        jQuery( "#vtabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );        

        new WOW().init();

        /*MIXitUP jQuery*/
        jQuery('.pro').mixItUp({          
            activeClass: 'active',
            effects: 'fade translateZ(500px)',
            duration: 300
        });

      
        // hide #back-top first
        jQuery("#back-top").hide();
        
        // fade in #back-top
        jQuery(function () {
          jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 100) {
              jQuery('#back-top').fadeIn();           
              
            } else {
              jQuery('#back-top').fadeOut();
            }
          });

          // scroll body to 0px on click
          jQuery('#back-top a').click(function () {
            jQuery('body,html').animate({
              scrollTop: 0
            }, 800);
            return false;
          });
        });
/*----------------------------------------------------*/
// CONTACT FORM WIDGET
/*----------------------------------------------------*/

  jQuery("form#contactfrm .contactbtn").on( "click", function(e) {
    e.preventDefault(); 
    name = jQuery('#contact_name').val();
    email = jQuery('#contact_email').val(); 
    sub = jQuery('#contact_subject').val(); 
    msg = jQuery('#contact_message').val(); 
    var error =0; 
    
    
    if(name=="Your Name" || jQuery.trim(name).length==0 ){ jQuery("#contact_name").addClass('contant_error'); error =1; }else{ jQuery("#contact_name").removeClass('contant_error');  }
    
    if(email=="Your Email"){ jQuery("#contact_email").addClass('contant_error'); error =1; }else{ jQuery("#contact_email").removeClass('contant_error');  }
    
    var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
    
    if(!pattern.test(email)){ error =1; }
    
    if(sub=="Subject" || jQuery.trim(sub).length==0){ jQuery("#contact_subject").addClass('contant_error'); error =1; }else{ jQuery("#contact_subject").removeClass('contant_error');  }
    
    if(msg=="Type Message" || jQuery.trim(msg).length==0){ jQuery("#contact_message").addClass('contant_error'); error =1; }else{ jQuery("#contact_message").removeClass('contant_error');  }
    
    if(error ==1){
      jQuery("#contact_form_message_box").html('<div class="alert alert-error">Fields are required.</div>');
    }else{
      jQuery("#contact_form_message_box").html('<div class="alert alert-info">Please wait....</div>'); 
      jQuery.ajax({ 
        type: "POST",
        url: "libs/submit-form-ajax.php",
        data: 'name='+name+'&email='+email+"&subject="+sub+"&message="+msg,
        success: function(msg){
          if(msg=="success"){
            jQuery("#contact_form_message_box").html('<div class="alert alert-success">Your message is sent. Thank you!</div>');
            jQuery('#contact_name').val('Your Name');
            jQuery('#contact_email').val('Your Email'); 
            jQuery('#contact_subject').val('Subject'); 
            jQuery('#contact_message').val('Type Message');  
          }else{
            jQuery("#contact_form_message_box").html('<div class="alert alert-error">Something wrong. Please try again!</div>');  
          }   
        } 

      });
    }
  });

  /* twitter call   
  jQuery.ajax({ 
    type: "POST",
    url: "tweets/get-tweets.php",
    data: 'user=envato',  //your twitter username 
    success: function(msg){

      jQuery("#gettweet").html(msg);
    }

  }); */  
  

    /*********************
      Scroll
    **********************/

    jQuery(window).load(function(){
            jQuery("#first_home").addClass("nav-active");   
            var lastId;
            var topMenu = jQuery("#thumbs");
            
            var topMenuHeight = topMenu.outerHeight()+280;
            
            var menuItems = topMenu.find("a");
            
            var scrollItems = menuItems.map(function(){
              var item = jQuery(jQuery(this).attr("href"));
              if (item.length) { return item; }
            });

        jQuery(window).scroll(function(){
           var fromTop = jQuery(this).scrollTop()+topMenuHeight;
           var cur = scrollItems.map(function(){
             if (jQuery(this).offset().top < fromTop)
               return this;
           });
           cur = cur[cur.length-1];
           var id = cur && cur.length ? cur[0].id : "";
           
           if (lastId !== id) {
                jQuery("#first_home").removeClass("nav-active");
               lastId = id;
               menuItems
                 .parent().removeClass("nav-active")
                 .end().filter("[href=#"+id+"]").parent().addClass("nav-active");
           }       
        });
    });

  jQuery(window).load(function(){
        jQuery('#mobnav-btn').click(

        function () {
            jQuery('.sf-menu').toggleClass("xactive");
      jQuery('ul.main-menu li a').click(function() { jQuery('ul.main-menu').removeClass('xactive'); return false; });
        });

        jQuery('.mobnav-subarrow').click(
        function () {
            jQuery(this).parent().toggleClass("xpopdrop");
        });
        /*--slider menu--*/
        jQuery('#mobnav-btn-2').click(
        function () {  
            jQuery('.slider_menu .sf-menu').toggleClass("xactive");
           jQuery('.slider_menu ul.main-menu li a').click(function() { jQuery('ul.main-menu').removeClass('xactive'); return false; });
        });
    });//]]> 
	   
    jQuery(window).load(function() {
      jQuery(".loader").fadeOut("slow");
    }) 


    jQuery(window).load(function(){
      jQuery('#blog_section').masonry({
           itemSelector : '.masonry',
           columnWidth : 585,
           isAnimated: true,
           animationOptions: {
                duration: 700,
                easing: 'linear',
                queue: false
           }
      });
  });


  jQuery(window).load(function(){
  var settingsItemsMap = {
    zoom: 12,
    center: new google.maps.LatLng(51.5033630, -0.1276250),
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE
    },
    styles:[
    {
      "featureType": "landscape",
      "stylers": [
        {
          "color": "green"
        }
      ]
    },    
    
    {
      "featureType": "administrative",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "lightness": 33
        }        
      ]
    },
    
    {
      "featureType": "road" ,
      "stylers": [
        {
          "color": "#c7c7c7"
        }
      ]
    },
    
    {
      "featureType": "poi.park",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "lightness": 20
        }
      ]
    },
    {},
    {
      "featureType": "road",
      "stylers": [
        {
          "lightness": 50
        }, 
        {
          "color": "#c7c7c7"
        }
      ]
    }
  ],
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), settingsItemsMap );

  var myMarker = new google.maps.Marker({
    position: new google.maps.LatLng(51.5033630, -0.1276250),
    draggable: true
  });

  google.maps.event.addListener(myMarker, 'dragend', function(evt){
    document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + evt.latLng.lat().toFixed(3) + ' Current Lng: ' + evt.latLng.lng().toFixed(3) + '</p>';
  });

  google.maps.event.addListener(myMarker, 'dragstart', function(evt){
    document.getElementById('current').innerHTML = '<p>Currently dragging marker...</p>';
  });

  map.setCenter(myMarker.position);
  myMarker.setMap(map);
  });//]]>  


});

var revapi;

jQuery(document).ready(function() {

       revapi = jQuery('.tp-banner').revolution(
        {
            delay:15000,
            startwidth:1170,
            startheight:500,
            hideThumbs:10,
            fullWidth:"off",
            fullScreen:"on",
            fullScreenOffsetContainer: ""
        });

}); //ready

})(jQuery);


