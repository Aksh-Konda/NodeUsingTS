import { rectangle } from "./rectangle";


function solveRect(x, y) {
    console.log("area:", rectangle.area(x, y));
    console.log("perimeter", rectangle.perimeter(x, y));
}

solveRect(2,2);
solveRect(2,4);
solveRect(2,5);
solveRect(3,2);