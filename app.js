const TWO = 2;
const COORDINATE_X = 10;
const COORDINATE_Y = 20;
const WIDTH_OF_RECTANGLE = 200;
const HEIGHT_OF_RECTANGLE = 20;

function Rectangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.area;
    this.perimeter;

    this.calculateArea = function () {
        return this.width * this.height;
    };
    this.calculatePerimeter = function () {
        return (this.width + this.height) * TWO;
    };
    this.draw = function (x,y,width,height) {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.rect(x,y,width,height);
        ctx.fill();
    };
    this.displayInfo = function (area,perimeter){
        document.getElementById("area").innerHTML = area;
        document.getElementById("perimeter").innerHTML = perimeter;
    }
}

let newRectangle = new Rectangle(COORDINATE_X, COORDINATE_Y, WIDTH_OF_RECTANGLE, HEIGHT_OF_RECTANGLE);
newRectangle.draw(newRectangle.x,newRectangle.y,newRectangle.width,newRectangle.height);
newRectangle.displayInfo(newRectangle.calculateArea(),newRectangle.calculatePerimeter());


