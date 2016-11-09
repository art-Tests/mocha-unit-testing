var Cal = (function () {
    function Cal() {
        // code...
    }
    Cal.prototype.add = function (a, b) {
        return a + b;
    };
    Cal.prototype.multiply = function (a, b) {
        return a * b;
    };
    return Cal;
}());
var c = new Cal();
var result = c.add(1, 2);
console.log(result);
