var PageableCollection = Backbone.PageableCollection;

//Model
var Quote = Backbone.PageableCollection.extend({

});

//Collection
var Quotes = Backbone.PageableCollection.extend({
  model: Quote,
  url: "https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json",
  mode: "client",
  state: {
    pageSize: 15
  }
});

//fetch not working
var quotes = new Quotes();
quotes.fetch();
console.log(quotes);


//QuoteView
// var QuoteView = Backbone.View.extend({
//   className = "quote"
// });

// quoteView = new QuoteView({collection: quote});
// quote.fetch().done(function(){
//   quoteView.render();
// })