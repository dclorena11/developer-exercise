//Model
var Quote = Backbone.Model.extend({
  rootUrl: "http://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json"
});

//Collection
var Quotes = Backbone.Collection.extend({
  model: Quote,
  url: "http://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json",
  parse: function(data){
    // console.log(data);
    return data; //this returns a collection of models
  }
});


//Collection View
var QuotesView = Backbone.View.extend({
  render: function(){
    this.collection.forEach(this.addOne, this);
  },
  addOne: function(){
    var quoteView = new QuoteView({model: model});
    this.$el.append(quoteView.render().el);
    // console.log(quoteView);
  }
});

//Model View
var QuoteView = Backbone.View.extend({
  template: _.template('<h1>Hi</h1>'),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});


// console.log(quotesView);

$(document).ready(function(){
  //fetch collection
  var quotes = new Quotes();
  quotes.fetch({reset: true});
  console.log(quotes);

  //Initialize Collection View
  var quotesView = new QuotesView({collection: quotes});
  $('div').html(quotesView.render());
});

