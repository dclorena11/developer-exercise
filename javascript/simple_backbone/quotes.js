//Model
var Quote = Backbone.Model.extend({
  rootUrl: "http://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json",
  defaults: {
    context: "",
    quote: "",
    source: "",
    theme: ""
  }
});

//Collection
var Quotes = Backbone.Collection.extend({
  model: Quote,
  url: "http://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json",
  parse: function(data){
    return data;
  }
});

var quotes = new Quotes();
quotes.fetch();
console.log(quotes);


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

// var quoteView = new QuoteView({model: quote});
// quote.render();

