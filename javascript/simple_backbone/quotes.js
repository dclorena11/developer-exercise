var PageableCollection = Backbone.PageableCollection;

//Model
var Quote = Backbone.Model.extend({});

//Collection
var Quotes = Backbone.PageableCollection.extend({
  model: Quote,
  url: "https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json"
});

//Instance of Pageable Collection
var quotes = new Quotes([], {
  mode: "client",
  state: {
    pageSize: 15
  }
});

quotes.getFirstPage({fetch: true});
quotes.getPreviousPage({fetch: true});
quotes.getNextPage({fetch: true});
quotes.getLastPage({fetch: true});
console.log(quotes);