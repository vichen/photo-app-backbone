var AppView = Backbone.View.extend({
  initialize: function(params) {
    this.photoView = new PhotoView({model: this.model.get('currentPhoto')});
    this.titlesView = new TitlesView({collection: this.model.get('album')});

    this.model.on('change:currentPhoto', function(model) {
      this.photoView.setPhoto(model.get('currentPhoto'));
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.titlesView.$el,
      this.photoView.$el
    ]);
  }
});