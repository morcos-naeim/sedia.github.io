$(document).ready(function(){

    $('.carousel').carousel({
        interval: 2000
      })

       //smooth scroll to div
    $('.links li a').click(function() {
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value') ).offset().top
            
        },1000);
    })
    
});

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            // $('.filter').removeClass('hidden');
            $('.filter').show('1000');
            $('.filter-button').removeClass("active1");
            $(this).addClass("active1");
        }
        else
        {
        //    $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //    $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
			$('.filter-button').removeClass("active1");
			$(this).addClass("active1");
            
        }
    });
    
//    if ($(".filter-button").removeClass("active1")) {
// $(this).removeClass("active1");
// }
// $(this).addClass("active1");
// });

