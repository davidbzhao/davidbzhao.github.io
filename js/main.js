$(document).ready(function(){
    initLinks();
    initLinkMouseListeners();
    initTextMouseListeners();
})

function initLinks(){
    $('.link img').parent().click(function(event){
        var link = $(this).data('href');
        window.open(link, '_self');
    });
}

function initLinkMouseListeners(){
    $('.link img').mouseenter(function(){
        $(this).stop(true).animate({
            'max-width': '90%',
            'max-height': '90%'
        }, 200);
    })
    $('.link img').mouseleave(function(){
        $(this).stop(true).animate({
            'max-width': '80%',
            'max-height': '80%'
        }, 200);
    })
}

function initTextMouseListeners(){
    $('#bottom p').mouseenter(function(){
        $(this).stop(true).animate({
            'letter-spacing':'15px'
        }, 200);
    })
    $('#bottom p').mouseleave(function(){
        $(this).stop(true).animate({
            'letter-spacing':'10px'
        }, 200);
    })
}