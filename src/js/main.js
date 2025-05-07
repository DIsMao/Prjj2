$( document ).ready(function(){
    let windowHeight = $(window).height();;
    console.log(windowHeight)
    $(".topContainer").css("height", windowHeight + "px")
    
    $(".openOptListBtn").click(function (e) { 
            
        if($(this).next().hasClass("hidden")){
            $(this).next().removeClass("hidden");
        }else{
            $(this).next().addClass("hidden");
        }
        
    });

    
    function truncateText(element, lines) {
        const lineHeight = parseFloat(element.css("line-height"))
        element.css("max-height", `${lineHeight * lines}px`)
        
    }

    $(".text-Covrflow").each(function( index ) {
        truncateText($(this), 5);
      });


    //   if ($(window).width() < 700) {
        
    //         $(".owl-carousel-1").owlCarousel({
    //             loop: true,
    //             items: 1,
    //             nav: true,
    //             navText: "",
    //         });
      
    // }

  



        if ( $(window).width() < 768 ) {
          startCarousel();
        } else {
          $('.owl-carousel').css("display", "grid")
        }

      $(window).resize(function() {
          if ( $(window).width() < 768 ) {
            startCarousel();
          } else {
            stopCarousel();
          }
      });
      function startCarousel(){
        $(".owl-carousel").owlCarousel({
            autoWidth:true,
            autoHeightClass: 'blogCard-height',
            autoHeight:true,
           slideSpeed : 500,
        //    autoplay:true,
           items : 2,
           margin:10,
           itemsMobile : true,
           loop:true,

        });
        $(".owl-carousel").css("display", "block")
      }
      function stopCarousel() {
        var owl = $('.owl-carousel');
        owl.trigger('destroy.owl.carousel');
        owl.css("display", "grid")
        
      }

})