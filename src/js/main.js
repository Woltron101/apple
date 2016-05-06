$(document).ready(function () {
	$('ul.devise-list li').hover(function(){
		$('ul.devise-list li').removeClass('active');
		$(this).addClass('active');
		$('.imgs img.active').removeClass('active');
		$($(this).data('target')).addClass("active");
		$($(this).data('target')).animateCss('fadeIn');
	})
})
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false
	});
});

ymaps.ready(init);
var myMap, 
    myPlacemark;

function init(){ 
    myMap = new ymaps.Map("map", {
        center: [59.935417, 30.359832],
        zoom: 16
    }); 
    
    myPlacemark = new ymaps.Placemark([59.935417, 30.359832], {
        balloonContent: 'г. Санкт-Петербург, ул.Восстания , 10А'
    });
    
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
}
