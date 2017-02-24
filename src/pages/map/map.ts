import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google;

@Component({
	selector: 'page-map',
	templateUrl: 'map.html'
})
export class MapPage {
	@ViewChild('map') mapContainer: ElementRef;
	map: any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	ionViewWillEnter() {
		this.displayGoogleMap();
	}

	displayGoogleMap() {
		let latLng = new google.maps.LatLng(-24.987704, -53.448557);

		let mapOptions = {
			center: latLng,
			disableDefaultUI: false,
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		}
		this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MapPage');
	}

}
