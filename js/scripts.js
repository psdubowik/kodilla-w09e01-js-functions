function getTriangleArea(a, h) {
    
    if(a < 0 || h < 0) {
        return "Nieprawiłowe dane";
    }

    return a * h / 2;
}
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(100, 15);
var triangle2Area = getTriangleArea(1, 40);
var triangle3Area = getTriangleArea(2, -18);

console.log(triangle1Area, triangle2Area, triangle3Area);