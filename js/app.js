

$(document).ready(function(){
    $(window).scroll(function(){
        // let nav=$('.navbar');
        let scrollNum= $(window).scrollTop();
        console.log(scrollNum);
        if(scrollNum>49){
            $('.navbar').css({
                'background':'white',
                'box-shadow':'5px 5px 10px black',
            })
            
        }
        else{
            $('.navbar').css({
                "background" :"transparent",
                'box-shadow':'none'
            })
        }
    })
});


wow = new WOW(
    {
    boxClass:     'animate__animated',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  ).init();
  
