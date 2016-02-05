
//Collection
var Quotes = Backbone.Collection.extend({
  url: "https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json",
  model: Quote
});

//Model
var Quote = Backbone.Model.extend({urlRoot: "https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json"});

//View

var QuoteView = Backbone.View.extend({


});

$(document).ready(function(){
  console.log(quotes.models);
})
