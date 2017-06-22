angular.module("app")
  .factory('$translateEn', [() => {
    var words = {
      iliev: "iliev",
      sich: "sich",
      ilyzshuk: "ilyzshuk",
      danilyuk: "danilyuk",
      gusev: "gusev"
    }
    return words
  }])