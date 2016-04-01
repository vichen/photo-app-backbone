var TitleList = Photos.extend({

  intialize: function() {
    this.on('viewPhoto', this.viewPhoto, this);
  },

})