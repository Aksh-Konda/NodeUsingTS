"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
function Rectangle(x, y, callback) {
    if (x <= 0 || y <= 0)
        setTimeout(function () {
            return callback(new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y), null);
        }, 2000);
    else
        setTimeout(function () {
            return callback(null, {
                perimeter: function () { return (2 * (x + y)); },
                area: function () { return (x * y); }
            });
        }, 2000);
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=rectangle.js.map