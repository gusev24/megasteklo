angular.module("app")
  .factory('$translate', ['$rootScope','$translateRu','$translateEn', ($rootScope,$translateRu, $translateEn) => {
    var vocabulary = {
        ru: $translateRu,
        en: $translateEn
      }
    return (word)=>{
      return vocabulary[$rootScope.lang][word] || word
    }
  }])