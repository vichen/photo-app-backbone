var InputView = Backbone.View.extend({
  el: '<form>',

  initialize: function() {
    this.urlInputView = new UrlInputView();
    this.titleInputView = new TitleInputView();
    this.submitButtonView = new SubmitButtonView();

    // this.model.on('addPhoto')
    this.render();
  },

  render: function() {
    return this.$el.html([
      this.urlInputView.$el,
      '<br>',
      this.titleInputView.$el,
      '<br>',
      this.submitButtonView.$el,
    ]);
  }
});