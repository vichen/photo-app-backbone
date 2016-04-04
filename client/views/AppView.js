var AppView = Backbone.View.extend({
  initialize: function(params) {
    this.photoView = new PhotoView({model: this.model.get('currentPhoto')});
    this.titlesView = new TitlesView({collection: this.model.get('album')});
    this.inputView = new InputView();
    

    this.model.on('change:currentPhoto', function(model) {
      this.photoView.setPhoto(model.get('currentPhoto'));
    }, this);
  },

  render: function() {
    return this.$el.html([
      '<h1>Photo App</h1>',
      this.inputView.$el,
      this.titlesView.$el,
      this.photoView.$el,
    ]);
  }
});