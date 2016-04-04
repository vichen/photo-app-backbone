var PhotoView = Backbone.View.extend({
  
  el: '<div id="photo">',

  template: _.template('<img src=<%= url %>>\
    <p> Title: <%= title %> </p>\
    <p> Photographer: <%= photographer %> </p>\
    <p> Rating: <%= rating %> </p>'),

  initialize: function() {
    this.render();
  },

  setPhoto: function(photo) {
    this.model = photo;
    this.model.on('change:rating', this.render, this);
    this.render();
  },

  render: function() {
    if (!this.model.attributes.url) { return; }
    return this.$el.html([this.template(this.model.attributes),
      '<span>Change Rating: </span>', new DropdownView({model: this.model}).render()]);
  }
});