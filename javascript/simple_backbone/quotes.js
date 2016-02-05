
//Collection
var Quotes = Backbone.Collection.extend({
  url: "https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json",
  model: Quote
});

//Model
var Quote = Backbone.Model.extend({urlRoot: "https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json"});

//View
var QuoteView = Backbone.View.extend({
  tagName: 'article',
  id: 'quote-view',
  classname:'quote',
  render: function(){
    //var html = '<h3>' + this.model.get('quote') + '</h3>'
    //this.$el.html(html);
  }
});

var quoteView = new QuoteView({model: quote});
quote.render();

$(document).ready(function(){
  console.log(quotes.models);
})
