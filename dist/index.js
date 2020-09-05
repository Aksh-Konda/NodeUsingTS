"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rectangle_1 = require("./rectangle");
function solveRect(l, b) {
    console.log("Solving for rectangle with l = "
        + l + " and b = " + b);
    rectangle_1.Rectangle(l, b, function (err, rectangle) {
        if (err) {
            console.log("ERROR: ", err.message);
        }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement after the call to rect()");
}
;
solveRect(-2, 2);
solveRect(2, 4);
solveRect(2, -5);
solveRect(3, 2);
//# sourceMappingURL=index.js.map