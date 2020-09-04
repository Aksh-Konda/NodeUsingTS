"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rectangle_1 = require("./rectangle");
function solveRect(x, y) {
    console.log("area:", rectangle_1.rectangle.area(x, y));
    console.log("perimeter", rectangle_1.rectangle.perimeter(x, y));
}
solveRect(2, 2);
solveRect(2, 4);
solveRect(2, 5);
solveRect(3, 2);
//# sourceMappingURL=index.js.map