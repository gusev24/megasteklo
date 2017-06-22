angular.module("app")
  .factory('$validators', () => {
    var validators = {
      positiveNumber: (value)=> {
        return _.isNumber(value) && value>0
      },
      statement: (value)=>{
        return eval(value)
      },
      notEmptyArray: (value)=> {
        return _.isArray(value) && value.length
      },
      phoneNumber: (value)=> {
        return value.match(/380[0-9]{9}/)
      },
      adr: (value)=> {
        return _.isNumber(value) && value>0 && value<10
      },
      temperature: (value)=> {
        return _.isNumber(value) && value>-274
      },
      cargoWeight: (value)=> {
        return _.isNumber(value) && value>0 && value<41
      },
      percent: (value)=> {
        return _.isNumber(value) && value>0 && value<101
      },
      email: (value)=> {
        return _.isString(value) && value.length>0 && value.indexOf(' ')==-1 && value.match(/.+@.+/)
      },
    }
    return validators;
  })



  .directive('checkForm', ($timeout)=>{
    return (scope, element, attrs)=> {
      scope.$watch(attrs.checkForm, (formSubmitted)=>{
        if(!formSubmitted){
          return;
        };
        var models = $(element).find("[ng-model]")
        for(var el in models){
          $(el).keydown(()=>{
            $(this).removeClass('error')
          });
        }
        var badFields = $(element).find(".invalid-model")
        console.log(badFields, badFields.length)
        _.each(badFields,el=>{
          $(el).addClass("error")
        })

        if(badFields.length){
          console.log("bad validation", badFields);
          if(attrs.onValidationError && _.isFunction(eval('scope.'+attrs.onValidationError))){
            eval(eval('scope.'+attrs.onValidationError+'()'));
          }
        }
        else {
          console.log("good validation")
          eval(eval('scope.'+attrs.onValidationOk+'()'));
        }
      });
  }})

  .directive('validator', ($timeout, $validators) =>{
    return (scope, element, attrs) => {
      var validators = $validators;
      var model = 'scope.' + $(element).attr("ng-model");
      if(attrs.index){
        model = model.split('$index').join(attrs.index);
      }
      var value = eval(model)
      var validator = attrs.isRequired
      var target = attrs.errorTarget
      if(!target){
        target = element
      }
      else {
        target = "#"+target
      }
      scope.$watch(attrs.ngModel, (value)=>{
        $(target).removeClass("error")
        var value = eval(model)
        var validator = attrs.validator
        if(!_.isUndefined(attrs.isRequired)){
          if (_.isNull(value) || _.isUndefined(value) || value=="") {
            $(target).addClass("invalid-model")
          }
          else
            if(validator && !(eval('validators.'+validator))(value)) {
              $(target).addClass("invalid-model")
            }
            else {
              $(target).removeClass("invalid-model")
            }
        }
        else {
          if(!(_.isNull(value) || _.isUndefined(value))){
            if (validator && !(eval('validators.'+validator))(value)){
              $(target).addClass("invalid-model")
            }
            else {
              $(target).removeClass("invalid-model");
            }
          }
          else {
            $(target).removeClass("invalid-model");
          }
        }
      });
    }});






