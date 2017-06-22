angular.module("app")
  .factory('$translateRu', [() => {
    var words = {
      iliev: "Ильев",
      sich: "Сичкаренко",
      ilyzshuk: "Ильящук",
      danilyuk: "Данилюк",
      gusev: "Гусев"
    }
    return words

  }])