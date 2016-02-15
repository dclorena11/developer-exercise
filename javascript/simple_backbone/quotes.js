var PageableCollection = Backbone.PageableCollection;

//Model
var Quote = Backbone.Model.extend({
  defaults: {
    quote: '',
    context: '',
    source: '',
    theme: ''
  }
});

//Collection
var Quotes = Backbone.PageableCollection.extend({
  model: Quote,
  url: "https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json",
  parse: function(data){
    console.log(data);
    return data;
  },
  mode: "client",
  state: {
    pageSize: 15
  }
});


//View
var QuotesView = Backbone.View.extend({
    el: '.content',

    initialize:function(){
      this.collection = new Quotes();
      this.collection.on('reset', function(){
          this.render();
        }, this);

      this.collection.fetch({reset: true});
    },
    render: function () {
      var quotesGroup = this.collection.models;
      console.log(quotesGroup);
      var template = _.template($('#quote-list-template').html(), {quotes: quotesGroup});
      this.$el.html(template);
    }
});


$(document).ready(function(){
  var quotesView = new QuotesView({});
});