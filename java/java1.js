   $('#togglethis2').click(function(){
        $(".background2").fadeIn(400);
        $(".background1").fadeOut(400);
    });
    
    $('#togglethis1').click(function(){
        $(".background2").fadeOut(400);
        $(".background1").fadeIn(400);      
    });

    $(".articles").mouseenter(function(){
        $(".first-article ").animate({
            opacity:1
        },3000,'swing');
       
    });

    $(".articles").mouseenter(function(){
        $(".second-article ").animate({
            opacity:1
        },3000,'swing');
       
    });

    $(".articles").mouseenter(function(){
        $(".third-article ").animate({
            opacity:1
        },3000,'swing');
    });

    $(".newspaper").mouseenter(function(){
        $(".newspaper > h1 ").animate({
            "left":"50px",
            opacity:1,
        },2000);  
    });
    
    $(".newspaper").mouseenter(function(){
        $(".newspapers-content").slideDown(2000); 
    });

    $(".background").mouseenter(function(){
        $(".thumb").slideDown(2000); 
    });
    $(".background").mouseenter(function(){
        $(".inner-thumb").slideDown(2000); 
    });

    $(".background").mouseenter(function(){
        $(".background>.inner-thumb-image>img").animate({
            marginTop:"0"
        },2000);
    });
    $(".background").mouseenter(function(){
        $(".background> .inner-thumb-image>.inner-thumb-text>p:first-child").animate({
            marginTop:"0"
        },2000);
    });
    $(".background").mouseenter(function(){
        $(".background> .inner-thumb-image>.inner-thumb-text>p:last-child").animate({
            marginTop:"0"
        },2000);
    });

    $(".contents").mouseenter(function(){
        $(".first-content>img").animate({
            marginTop:"0"
        },2000);
    });
    $(".contents").mouseenter(function(){
        $(".second-content>img").animate({
            marginTop:"0"
        },2500);
    });
    $(".contents").mouseenter(function(){
        $(".about-us").animate({
            marginTop:"0"
        },3000);
    });
    $(".contents").mouseenter(function(){
        $(".contents>h2").animate({
            marginTop:"0",
            opacity:1
        },3000);
    });

    $(".articles").mouseenter(function(){
        $(".first-article>img").slideDown(1500); 
    });
    $(".articles").mouseenter(function(){
        $(".second-article>img").slideDown(1500); 
    });
    $(".articles").mouseenter(function(){
        $(".third-article>img").slideDown(1500); 
    });
    $(".articles").mouseenter(function(){
        $(".fourth-article>img").slideDown(1500); 
    });
    $(".articles").mouseenter(function(){
        $(".fifth-article>img").slideDown(1500); 
    });
    $(".articles").mouseenter(function(){
        $(".sixth-article>img").slideDown(1500); 
    });
    $(".articles").mouseenter(function(){
        $(".seventh-article>img").slideDown(1500); 
    });

    $(".articles").mouseenter(function(){
        $(".newspapers").animate({
            marginTop:"0",
        },2000);
    });