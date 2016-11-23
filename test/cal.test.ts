import * as mocha  from 'mocha';
import * as chai from 'chai';
import Cal from '../js/cal';
chai.should();


describe("Calculator",()=>{
  it("1 and 1 should return 2",()=>{
    let c = new Cal();
    let expect = 2;
    let actual = c.Add(1,1);
    expect.should.eq(actual);
  })
})