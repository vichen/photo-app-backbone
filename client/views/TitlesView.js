var TitlesView = Backbone.View.extend({
  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Titles</th>').append(
      this.collection.map(function(photo) {
        return new TitleEntryView({model: photo}).render();
      }))
  },


});