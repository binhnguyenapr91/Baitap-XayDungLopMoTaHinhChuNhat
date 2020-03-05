function Rectangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.calculateArea = function () {
        return this.width * this.height;
    };
    this.calculatePerimeter = function () {
        return (this.width + this.height) * 2;
    };
}

function drawRectangle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let newRectangle = new Rectangle(10, 10, 200, 20);
    ctx.beginPath();
    ctx.rect(newRectangle.x, newRectangle.y, newRectangle.width, newRectangle.height);
    ctx.fill();
    let area = newRectangle.calculateArea();
    document.getElementById("area").innerHTML = area;

    let perimeter = newRectangle.calculatePerimeter();
    document.getElementById("perimeter").innerHTML = perimeter;
}

drawRectangle();


