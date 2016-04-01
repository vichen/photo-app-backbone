var TitleEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.viewPhoto();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});