$(document).ready(function(){
  $('select').formSelect();
});


$(document).ready(function() {
    $("#content-slider").lightSlider({
        item:2,
        loop:true,
        auto:true,
        keyPress:true,
        controls:false,
        speed:1000,
        // pager:false,
       
        // addClass: '',
        // mode: "slide",
        // useCSS: true,
        // cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
        
        slidesToShow: 1,
        slidesToScroll:1,
        slideMargin:10,      
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
              // dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
                item:2,
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
                item:1,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        
        ]
          });
  
  
      $("#partner-logo").lightSlider({
        item:6,
        loop:true,
        auto:true,
        keyPress:false,
        slidesToShow: 1,
        slidesToScroll:1,
        speed:6000,
        pager:false,
        controls:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              item:2,
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              item:3,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        
        ]
      });

      $(".top-cities").lightSlider({
        item:5,
        loop:true,
        auto:false,
        keyPress:false,
        slidesToShow: 1,
        slidesToScroll:1,
        speed:1000,
        pager:false,
        controls:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              item:2,
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              item:1,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        
        ]
      });
  });



$(function() {
    $( "#date_picker" ).datepicker();
    $( "#anim" ).on( "change", function() {
      $( ".datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
    });
  });
  
  $( function() {
    var availableTags = [
      "Lagos",
      "Kaduna",
      "Kano",
      "Maiduguri",
      "Jalingo",
      "Lafia",
      "Keffi",
      "Abuja",
      "Iyana-Ipaja",
      "Zamfara"
    ];
    $( "#from_tags" ).autocomplete({
      source: availableTags
    });
    $( "#to_tags" ).autocomplete({
      source: availableTags
    });
  });