var expect = require('chai').expect;
var tools = require("../tools");

describe('Testing if true is equal to true', function() {
    it('should pass when everything is good', function() {
        expect(true).to.be.true;
    })
})



describe("printName()", function() {

    it("Should print the Surname first", function() {

        var results = tools.printName({ first: "Liam", surname: "Whorriskey"});

        expect(results).to.equal("Whorriskey, Liam");

    });

});