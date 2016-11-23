var multiply = require('./../js/multiply.js');
var expect = require('chai').expect;

describe('乘法函數的測試', function() {
  it('1 乘 1 應該等於 1', function() {
    expect(multiply(1, 1)).to.be.equal(1);
  });
})
