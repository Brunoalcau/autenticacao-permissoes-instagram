'use strict';

describe('Service: dataSourceInstatram', function () {

  // load the service's module
  beforeEach(module('instagramApp'));

  // instantiate service
  var dataSourceInstatram;
  beforeEach(inject(function (_dataSourceInstatram_) {
    dataSourceInstatram = _dataSourceInstatram_;
  }));

  it('should do something', function () {
    expect(!!dataSourceInstatram).toBe(true);
  });

});
