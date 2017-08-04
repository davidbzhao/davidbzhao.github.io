$(document).ready(function(){
    initLinks();
    initMouseListeners();
})

function initLinks(){
    $('.link img').click(function(event){
        var link = $(this).data('href');
        window.open(link);
    });
}

function initMouseListeners(){
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