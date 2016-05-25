
var cardComponent = Vue.extend({
	template: '<li>A custom component!</li>'
})

Vue.component('card', cardComponent)

// create a root instance
new Vue({
  el: '#app',
  data: {
    debug: true,
    people: []
  },
  ready: function(){
    this.loadPeople();
  },
  methods: {
    loadPeople: function() {
    	this.$http.get('data/people.json'.then(function (response) {
        this.$set('people', response.data);
      });
    }
  }
});