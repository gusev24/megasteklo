angular.module("app")
  .directive('additional', ($timeout, $parse, )=>{
    return (scope, element, attrs)=> {

      var timer = {}
      $(element).css({
          width: 100+'%',
          height: 100+'%',
          position: 'absolute',
          left: 0
      })

      $(element).on('mousedown', (e)=>{
        // console.log('mousedown')
        timer = $timeout(()=>{
                console.log('time')
                $("#menu").css({
                  display: 'block',
                  position: "absolute",
                  left: (e.pageX+5) + "px",
                  top: (e.pageY - 120) + "px"
                })
              }, 1000)

      })
      $(element).on('mouseup', (e)=>{
        // console.log('mouseup')
        $timeout.cancel(timer)
        // $("#menu").css({
        //           display: 'none'
        //         })

      })
      $(".close-menu").on('click', ()=>{
         $("#menu").css({
                  display: 'none'
                })
      })
    }
})