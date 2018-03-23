window.onload = function(){  
    var ViVue = new Vue({
        el: '#vi-body',
        data: {
          message: 'Hello ViVue!',
          mes2:"This is test"
        }
    })
    // console.log(ViVue.$el)
    // console.log(ViVue.$el.querySelectorAll(".align-none")[0].style="float:none")
    // console.log(ViVue.$el.querySelectorAll(".align-none")[0].dataset.abc)
}  