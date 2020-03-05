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
        return (this.width + this.height) * 2;
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
let newRectangle = new Rectangle(10, 10, 200, 20);
newRectangle.draw(newRectangle.x,newRectangle.y,newRectangle.width,newRectangle.height);
newRectangle.displayInfo(newRectangle.calculateArea(),newRectangle.calculatePerimeter());


