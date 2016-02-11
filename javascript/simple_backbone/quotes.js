var PageableCollection = Backbone.PageableCollection;

//Model
var Quote = Backbone.PageableCollection.extend({});

//Collection
var Quotes = Backbone.PageableCollection.extend({
  model: Quote,
  url: "https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json",
  state: {
    pageSize: 15
  }
});

var quotes = new Quotes([],
  {mode: "client"}
);

//QuoteView
var QuoteView = Backbone.View.extend({
  className:"quote",
  template: _.template("Update template to show quote attributes"),
  fetchQuotes: function(){
    this.collection.getFirstPage();
    console.log(this.collection);
  }
});

var quoteView = new QuoteView({collection: quotes});
quoteView.fetchQuotes();
