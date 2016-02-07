//Model
var Quote = Backbone.Model.extend({
  defaults: {
     quote: "",
     context: "",
     source: "",
     theme: ""
   }
});

//Collection
var Quotes = Backbone.Collection.extend({
  model: Quote,
  url: "http://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json",
  getData: function(){
    var request = $.ajax({
      url: this.url,
      type: "GET"
    });
    request.success(function(response){
      console.log(response);
      quotes.reset(response);
      console.log(quotes);
    });
  }
});

var quotes = new Quotes();

quotes.getData();





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

