const virar = new Audio('https://github.com/Moonlight404/Portfolio/blob/master/virar.mp3?raw=true')

$('.page').click(function() {
		virar.play()
    $(this).removeClass('no-anim').toggleClass('flipped');
   $('.page > div').click(function(e) {
        e.stopPropagation();
   });
});


