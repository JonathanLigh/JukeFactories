'use strict';

juke.factory('PlayerFactory', function($http, $log){
  // non-UI logic in here
  	var obj = {};
  	 var audio = document.createElement('audio');
  	
    obj.start = function(song){
     
     
  		
     obj.pause(); 
     obj.playing = true;

      audio.src = song.audioURL;
  		audio.load();
  		audio.play();
  	}

  	obj.pause = function(){
      audio.pause(); 
      obj.playing = false

    

      

  	}

  	obj.resume = function(){
    audio.play();
    obj.playing = true 


  	}

  	obj.isPlaying = function(){
    
    return (obj.playing===true)

  	}

  	obj.getCurrentSong = function(){

      console.log(audio.src.substring(0, audio.src.length-6))  
      $http.get(audio.src.substring(0, audio.src.length-6))
      .then(function(audioSrc){
         console.log(audioSrc)
        return audioSrc
      })
      
      

  	}

  	obj.next = function(){

  	}

  	obj.previous = function(){

  	}

  	obj.getProgress = function(){

  	}
	return obj;
});
