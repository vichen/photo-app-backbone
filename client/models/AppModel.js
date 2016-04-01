var AppModel = Backbone.Model.extend({
  initialize: function(params) {
    this.set('titleList', new TitleList());
    this.set('currentPhoto', new PhotoModel());

    params.album.on('viewPhoto', function(photo) {
      this.set('currentPhoto', photo);
    }, this);
  }
});