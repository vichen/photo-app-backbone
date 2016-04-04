var SubmitButtonView = Backbone.View.extend({
  el: '<input type="submit" value="Add Photo">',

  initialize: function() {
    this.render();
  },

  events: {
    'click': 'addPhoto',
  },

  addPhoto: function(event) {
    console.log('button clicked');
  },

  render: function() {
    return this;
  }
});