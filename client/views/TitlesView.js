var TitlesView = Backbone.View.extend({
  tagName: 'table',

  initialize: function() {
    this.render();
  },

  // template: _.template('<td>(<%= title %>)</td>'),

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Titles</th>').append(
      this.collection.map(function(photo) {
        return new TitleEntryView({model: photo}).render();
      }))
  },


});