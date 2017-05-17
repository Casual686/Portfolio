var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 55.6360615, lng: 37.5141193},
            zoom: 14,
            zoomControl: false,
            disableDoubleClickZoom: false,
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            panControl: false,
            streetViewControl: false,
            draggable : true,
            overviewMapControl: false,
            overviewMapControlOptions: {
    			opened: false,
    		},
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
    		{
    			"featureType": "administrative",
    			"elementType": "labels.text.fill",
    			"stylers": [
    			{
    				"color": "#b4b4b4"
    			}
    			]
    		},
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
        				"color": "#ededed"
        			}
                ]
            },
            {
    			"featureType": "landscape",
    			"elementType": "all",
    			"stylers": [
    			{
    				"color": "#ffffff"
    			}
    			]
    		},
            {
    			"featureType": "water",
    			"elementType": "all",
    			"stylers": [
    			{
    				"color": "#61dac9"
    			},
    			{
    				"visibility": "on"
    			}
    			]
    		},
            {
    			"featureType": "poi",
    			"elementType": "all",
    			"stylers": [
    			{
    				"visibility": "off"
    			}
    			]
    		},
            {
    			"featureType": "road",
    			"elementType": "all",
    			"stylers": [
                    {
        				"saturation": -100
        			},
                    {
        				"lightness": 45
        			},
    			]
    		},
    		{
    			"featureType": "road.highway",
    			"elementType": "all",
    			"stylers": [
    			{
    				"visibility": "simplified"
    			}
    			]
    		},
    		{
    			"featureType": "road.arterial",
    			"elementType": "labels.icon",
    			"stylers": [
    			{
    				"visibility": "off"
    			}
    			]
    		},
    		{
    			"featureType": "transit",
    			"elementType": "all",
    			"stylers": [
    			{
    				"visibility": "off"
    			}
    			]
    		}
            ]
        });
      }
