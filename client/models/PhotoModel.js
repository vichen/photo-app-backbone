var PhotoModel = Backbone.Model.extend({
  defaults: {
    state: ''
  },

  viewPhoto: function() {
    this.trigger('viewPhoto', this);
  },

  changeRating: function() {
    this.trigger('changeRating', this);
  }
});