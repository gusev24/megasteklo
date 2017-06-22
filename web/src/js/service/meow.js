angular.module("app")
  .factory('$meow', [() => {
  
  	return {
  		meow: (times)=>{
  			var str="meow"
  			var res=""
  			for(var i=0;i<times;i++)res+=str+ " "
  			console.log(`${res}!!!!`)
  		}
  	}

  }])
  