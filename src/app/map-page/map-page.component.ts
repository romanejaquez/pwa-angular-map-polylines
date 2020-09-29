import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapPageComponent implements OnInit {
  
  map: google.maps.Map;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    zoom: 16
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {

      // getting the center of the map
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      // initialize the map container
      this.map = new google.maps.Map(document.getElementById('map-canvas'), {
        ...this.options,
        center: this.center
      });

      // adding a marker
      var markerStart = new google.maps.Marker({
        position: this.center,
        icon: {
          url: './assets/imgs/truck_pin.svg',
          anchor: new google.maps.Point(35,10),
          scaledSize: new google.maps.Size(100, 100)
        },
        map: this.map
      });
    });
  }

}
