var add = require('./../js/add.js');
var expect = require('chai').expect;

describe('加法函數測試', function() {
  it('1 加 1 應該等於 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('任何數加 0 應該等於自己', function() {
    expect(add(1, 0)).to.be.equal(1);
  });

});
