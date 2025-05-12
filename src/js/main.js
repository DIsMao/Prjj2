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
    $(".openMenuBtn").click(function (e) { 
     
      $(".mobMenuPopup").removeClass("bottom-full")
      
      $(".mobMenuPopup").addClass("bottom-0")

      let timer = 0;

      $($(".animateList .translate-y-m1000px").get().reverse()).each(function () {  
        
        let block = $( this )
        
        setTimeout(function(){
          block.removeClass("translate-y-m1000px")
         
        }, timer);
        timer = timer + 100
        console.log(timer)
      })
     
    });

    $(".closeMobM").click(function (e) { 
      $(".mobMenuPopup").removeClass("bottom-0")
      $(".mobMenuPopup").addClass("bottom-full")
      $(".animateList a").addClass("translate-y-m1000px")
      
    });

    $(".openPopUpVideo").click(function (e) { 
      $(".popUpVideo").removeClass("bottom-full")
      $(".popUpVideo").addClass("bottom-0")
    });

    $(".galPhoto").click(function (e) { 
      $(".popUpImage").removeClass("bottom-full")
      $(".popUpImage").addClass("bottom-0")

      
      $(".popUpImageSrc").attr("src", $(this).find(".galPhotoImg").attr("src"))
    });

    $(".closePopUp").click(function (e) { 
      
      $(".popUpMain").removeClass("bottom-0")
      
      $(".popUpMain").addClass("bottom-full")
      
    });
    // $(".galPhoto").click(function (e) { 

    //   $(".mobMenuPopup").removeClass("bottom-full")
      
    //   $(".mobMenuPopup").addClass("bottom-0")

    // });
  
    



      function startCarousel(clas){
        $(clas).owlCarousel({
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
        $(clas).css("display", "block")
      }
      function stopCarousel(clas) {
        var owl = $(clas);
        owl.trigger('destroy.owl.carousel');
        owl.css("display", "grid")
        
      }

      if ( $(window).width() < 768 ) {
        startCarousel(".owl-carousel");
      } else {
        $('.owl-carousel').css("display", "grid")
      }

    $(window).resize(function() {
        if ( $(window).width() < 768 ) {
          console.log($(window).width())
          startCarousel('.owl-carousel');
        } else {
          stopCarousel('.owl-carousel');
        }
    });

})