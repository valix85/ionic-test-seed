describe('index', function() {

  it('should have a title', function() {
    var title = element(by.css('.title'));

    browser.isElementPresent(title).then(function(result) {
      expect(result).toEqual(true);
    });

  });

});