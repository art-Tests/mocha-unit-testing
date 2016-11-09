//NODE
var cal = require('./../js/cal.js');
var expect = require('chai').expect;

//WEB
//var expect = chai.expect;

describe('Class加法函數測試', function() {
  it('1 加 1 應該等於 2', function() {
	var c = new Cal();
	var result = c.add(1, 2);
    expect(result).to.be.equal(2);
  });
});
