ymaps.ready(function(){
    var map = new ymaps.Map("map", {
        center: [51.67255515, 61.91894531],
        zoom: 3
    });

    var place = new ymaps.Placemark(
        [56.1327021, 47.2508053], {
            hintContent: 'Чебоксары',
        },
        {
            iconImageHref: '../img/Map_Icon.png',
            iconImageSize: [25, 38],
            iconLayout: 'default#image',
        }
    );
    map.geoObjects.add(place);
});