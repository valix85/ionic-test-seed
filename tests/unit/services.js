describe('Friends Unit Tests', function(){
    beforeEach(module('ionic-test-seed'));

    it('should return dummyValue', inject(function(testService) {
        expect(testService.get()).toBe("dummyValue");
    }));

});