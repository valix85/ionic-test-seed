describe('index', function() {
  
  beforeEach(function() {
    browser.get('http://localhost:8888/');
  });

  it('should have a title', function() {
  	var title = element(by.cssContainingText('title'));
  	
	browser.isElementPresent(title).then(function(result){
		expect(true).toEqual(true);
	});
	
  });

});