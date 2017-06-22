angular.module("app")
	.directive('backspace', ($timeout, $parse)=>{
	  return (scope, element, attrs)=> {
	  	var t = attrs.backspace;
	  	var obj = $parse(t.substr(0, t.lastIndexOf('.')))(scope)
	  	var key = t.substr(t.lastIndexOf('.')+1)

	  	
	  	try {
		  	$("body").keydown((e)=>{
		  		
		  		if(e.which == 8) {
		  			console.log(obj)
		  			if(obj[key].length) {
		  				scope.$apply(()=>{
		  					obj[key] = obj[key].substr(0, obj[key].length-1)
		  				})
			  			
			  		}
		  		}
		  	})
		  } catch(e){
		  	console.log("err", e)
		 }
	  	console.log(1)
	  }
	})