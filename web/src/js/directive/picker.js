angular.module("app")
  .directive('picker', ($timeout, $parse, $swipe)=>{
    return (scope, element, attrs)=> {
      var timer = {}
      var picker = angular.element('<div class="picker"></div>')
      $(element).on('mousedown', (e)=>{
        e.preventDefault()
        timer = $timeout(()=>{
          picker.css({
            position: "absolute",
            left: (e.pageX-120) + "px",
            top: (e.pageY - 120) + "px"
          })
          var arr=[]
          for(var c=0;c<5;c++)arr.push(c)

          _.each(arr, (el)=>{
            var block = angular.element('<div class="el"></div>')
            var color = ""
            var alph = "0123456789abcdef"
            for(var j=0;j<6;j++){
              color += alph.charAt(Math.floor(Math.random() * alph.length))
            }
            block.css({
              background: "#"+color,
              width: 50+'px',
              height: 50+'px',
              cursor: "pointer",
              display: "inline-block"
            })
            block.on('mouseup', (e)=>{
              console.log('2')
              e.stopPropagation();
              console.log(block.css('background'))
              element.css({
                background: "#"+color
              })
              picker.remove()
              picker.html('')
            })
            picker.append(block)
          })
          element.append(picker)
        }, 1000)
      })
      $(element).on('mouseup', ()=>{
        $timeout.cancel(timer);
        console.log('3')
        picker.remove()
        picker.html('')
      })

      var touch = {}
      element.on('touchstart', (e)=>{
        console.log(e)
        touch.startX = e.touches[0].pageX;
        console.log(touch)
      })
      element.on('touchend', (e)=>{
        console.log(e)
        var endX = e.changedTouches[0].pageX;
        console.log(endX)
        if(Math.abs(endX-touch.startX)>100) {
          var c = +element.text()
          if(endX>touch.startX)c++;else c--;
          element.text(c)
          var color = ""
          var alph = "0123456789abcdef"
          for(var j=0;j<6;j++){
            color += alph.charAt(Math.floor(Math.random() * alph.length))
          }
          element.css({
            background: "#"+color
          })
        }
      })
    }
  })