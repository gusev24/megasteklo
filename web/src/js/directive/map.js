// angular.module("app")
// 	.directive('map', ($timeout, $parse, $scope)=>{
// 	 	$scope.data = []
// 	    $scope.obj = {}
// 	    $scope.markers = []
// 	    $window.s = $scope
// 	    $scope.search = ()=>{
// 	        $http({
// 	          method: 'GET',
// 	          url: "http://nominatim.openstreetmap.org/search/?city="+$scope.obj.city+"&format=json&addressdetails=1&limit="+limit
// 	        }).then(function successCallback(response) {
// 	            // this callback will be called asynchronously
// 	            // when the response is available

// 	            console.log(response)
// 	            $scope.data = response.data
// 	            if(!$scope.data.length) return;
// 	            _.each($scope.markers, v=>{
// 	                map.removeLayer(v)
// 	            })
// 	            map.panTo(new L.LatLng($scope.data[0].lat, $scope.data[0].lon));
// 	            _.each($scope.data, v=>{
// 	                console.log(Math.floor(Math.random()*235234234))
// 	                $scope.markers.push(L.marker([v.lat, v.lon]).addTo(map)
// 	                    .bindPopup(v.display_name)
// 	                    .openPopup()
// 	                )
// 	            })

// 	          }, function errorCallback(response) {
// 	            // called asynchronously if an error occurs
// 	            // or server returns response with an error status.
// 	          });
// 	    }
// 	    var limit = 25
// 	    var map = L.map('map-demo').setView([46.4846583, 30.732564], 13);

// 	    L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
// 	        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// 	    }).addTo(map);
// 	})
