/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);
  // ^ the first argument is a string naming the controller,
  // the second argument is a function that defines the capacities
  // of the controller.

AlbumsIndexController.$inject = ['$http'];
function AlbumsIndexController ( $http ) {
  var vm = this;
  // vm.newAlbum = {};
  //
  // vm.newAlbum = {
  //     name: 'Viva Hate',
  //     artistName: 'Morrissey'
  // };

  // inside controller

  $http({
    method: 'GET',
    url: 'api/albums'
  }).then(function successCallback(response) {
    console.log('Success!', response);
    vm.albums = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createAlbum = function () {
    $http({
      method: 'POST',
      url: '/api/albums',
      data: vm.newAlbum,
    }).then(function successCallback(response) {
      var genres = vm.albums.genres.join();
        vm.albums.genres = genres;
      console.log('Hi!', response);
      vm.albums.push(response.data);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }
}
