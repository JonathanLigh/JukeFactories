'use strict';

juke.factory('PlayerFactory', function($http, $log){
  // non-UI logic in here
  	var obj = {};
  	var audio = document.createElement('audio');
  	obj.start = function(song){
  		audio.src = song;
  		audio.load();
  		audio.play();
  	}

  	obj.pause = function(){

  	}

  	obj.resume = function(){

  	}

  	obj.isPlaying = function(){

  	}

  	obj.getCurrentSong = function(){

  	}

  	obj.next = function(){

  	}

  	obj.previous = function(){

  	}

  	obj.getProgress = function(){

  	}
	return obj;
});
