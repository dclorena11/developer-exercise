$(document).ready(function(){
  module("Accordion tests");
    var $header = $(".accordion-header > a");


    test("That everything but the headers appear when page loads", function(assert) {
      assert.strictEqual( $header.length, 5, "There are 5 headers.");
    });

    test("When you click a header its contents appear", function(assert) {
      $header.click();
      assert.equal( $(".accordion-header > div:visible").length, 5, "True");
    });
});
