describe('homeServiceTests', function () {
    beforeEach(angular.mock.module('AngularJsDemoApp'));
    var homeService = {};
    var $httpBackend;

    beforeEach(inject(function (_homeService_, _$httpBackend_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        homeService = _homeService_;
        $httpBackend = _$httpBackend_;
    }));

    it('values from service should be correct', function () {
        var responseData;

        $httpBackend.when('GET', 'http://foodapi4demo.azurewebsites.net/api/').respond(200, []);

        homeService.getData().then(function (response) {
            responseData = response.data;
        });

        $httpBackend.flush();
        dump(responseData);
        expect(responseData).toEqual([]);
    });
});