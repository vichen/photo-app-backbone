var UrlInputView = Backbone.View.extend({
  el: '<input>',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.resetInput();
    return this;
  },

  resetInput: function() {
    this.$el.attr({
      placeholder: 'Photo Url'
    });
    this.clearInput();
  },

  clearInput: function() {
    this.$el.val('');
  }

});