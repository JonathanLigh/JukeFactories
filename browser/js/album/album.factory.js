

juke.factory('AlbumFactory', function($http, $log){
	var obj = {};


  obj.fetchAll = function(){
  	return $http.get('/api/albums/')
  	.then(function (res){ 
  		res.data.forEach(function(e){
  			e.imageUrl = '/api/albums/' + e.id + '/image';
  			e.songs.forEach(function(song, i){
  				song.audioUrl = '/api/songs/' + song.id + '/audio';
  				song.albumIndex = i;
  			})
  		})

  		return res.data; 
  	})
  }

  obj.findById = function(id){
  	$http.get('/api/albums/' + id)
  	.then(function(album){
  		return album;
  	})
  }

  return obj;
});