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

    

})