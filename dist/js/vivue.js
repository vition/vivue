
Vue.component('alert', {
    template: '<div :class="v_style" class="alert" role="alert"><h4 class="alert-heading" v-if="v_head">{{v_head}}</h4><p v-if="v_body">{{v_body}}</p><span v-if="v_text" v-html="v_text"></span><hr v-if="v_foot"><p v-if="v_foot">{{v_foot}}</p></div>',
    props:['vstyle','vtext','vhead','vbody','vfoot'],
    data:function(){
        this.vstyle = this.vstyle ? this.vstyle : 'primary';
        var dataOption = {v_style:"alert-"+this.vstyle,v_text:this.vtext,v_class:"",v_head:this.vhead,v_body:this.vbody,v_foot:this.vfoot}
        return dataOption
    },
})
Vue.component('badge', {
    template:'<button :class="[v_style,v_pill]"  type="button" class="btn btn-primary" v-if="v_btn" >{{v_title}}<span class="badge badge-light">{{v_text}}</span></button><a  v-else-if="v_href" :class="[v_style,v_pill]" :href="v_href" class="badge">{{v_text}}</a><span v-else :class="[v_style,v_pill]" class="badge">{{v_text}}</span>',
    props:['vtext','vbtn','vstyle','vtitle','vpill','vhref'],
    data:function(){
        this.vstyle = this.vstyle ? this.vstyle : 'primary';
        this.vpill = this.vpill ? "badge-pill" : "";
        var dataOption = {v_style:"badge-"+this.vstyle,v_text:this.vtext,v_btn:this.vbtn,v_title:this.vtitle,v_pill:this.vpill,v_href:this.vhref}
        return dataOption
    }
})
Vue.component('btn', {
    template:'<a v-if="v_href" :class="[v_style,v_size,v_block]" class="btn" :href="v_href" role="button">{{v_title}}</a> <button v-else :class="[v_style,v_size,v_block]" type="button" class="btn">{{v_title}}</button>',
    props:['vblock','vsize','vstyle','vtitle','voutline','vhref'],
    data:function(){
        var voutline = this.voutline ? "voutline-" : "";
        this.vsize = this.vsize ? "btn-"+this.vsize : "";
        this.vblock = this.vblock ? "btn-block" : '';
        this.vstyle = this.vstyle ? "btn-"+voutline+this.vstyle : 'btn-'+voutline+'primary';
        var dataOption = {v_style:this.vstyle,v_title:this.vtitle,v_size:this.vsize,v_block:this.vblock,v_href:this.vhref}
        return dataOption
    }
})
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
    // $(".alert").alert('close')
}  