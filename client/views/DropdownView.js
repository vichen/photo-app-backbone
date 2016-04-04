var DropdownView = Backbone.View.extend({
  el: '<select id="rating">',

  initialize: function(options) {
    
  },

  events: {
    'change': 'changeRating'
  },

  changeRating: function(event) {
    this.model.set('rating', event.target.value);
    this.render();
  },

  render: function() {
    this.$el.append(
      ['<option>1</option>',
      '<option>2</option>',
      '<option>3</option>', 
      '<option>4</option>', 
      '<option>5</option>']);
   return this.$el;
  }

});