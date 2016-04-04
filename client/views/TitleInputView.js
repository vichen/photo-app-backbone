var TitleInputView = Backbone.View.extend({
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
      placeholder: 'Title'
    });
    this.clearInput();
  },

  clearInput: function() {
    this.$el.val('');
  }
});