
// create a root instance
new Vue({
  el: '#app',
  data: {
    debug: true,
    cards: []
  },
  ready: function(){
    this.loadPeople();
  },
  methods: {
    loadPeople: function() {
      this.$http.get('data/people.json').then(function (response) {
        this.$set('cards', response.data);
      });
    }
  }
});