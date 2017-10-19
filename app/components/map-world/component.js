import Ember from 'ember';

const {Component} = Ember;

export default Component.extend({
	classNames: ['Map', 'Map--fullscreen'],
	lat: 9.96885060854611,
  lng: 53.08593750000001,
  zoom: 2,
	actions: {
    updateCenter(e) {
      let center = e.target.getCenter();
      this.set('lat', center.lat);
      this.set('lng', center.lng);
			this.set('zoom', center.zoom);
    }
  }
});
