angular.module("app")
    .directive('dropdown', ($timeout, $parse)=>{
      return (scope, element, attrs)=> {
        var itemsList = [
            {'name': 'Odessa'},
            {'name': 'Milan'},
            {'name': 'Minsk'},
            {'name': 'Kiev'},
            {'name': 'Barcelona'},
            {'name': 'Paris'},
            {'name': 'Amsterdam'},
            {'name': 'Liverpool'}
          ];
          var list = angular.element("<div class='dropdown-wrapper'></div>")
          _.each(itemsList, (item)=>{
            var el = angular.element("<div class='list-item'>"+item.name+"</div>")
            list.append(el);
             console.log(el)
          })

          element.on('focus', ()=>{
             element.parent().append(list);

          })
          element.on('blur', ()=>{
             list.remove()

          })

    }
})
