var chai = require('chai')
  , cc = require('../index')
  , expect = chai.expect;

describe('country code', function(){

  it('should return french currency', function() {
    var franceInfo = cc('FR');
    expect(franceInfo).to.be.an('object');
    expect(franceInfo.symbol).to.equal('€');
    expect(franceInfo.code).to.equal('EUR');
  });

  it('should return US currency', function() {
    var info = cc('US');
    expect(info).to.be.an('object');
    expect(info.symbol).to.equal('$');
    expect(info.code).to.equal('USD');
  });

  it('should return null for unknown country code', function() {
    var info = cc('XYZ');
    expect(info).to.be.ko;
  });

});
