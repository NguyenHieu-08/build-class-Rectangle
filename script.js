let Rectangle = function (lengthHCN, widthHCN) {

    this.lengthHCN = lengthHCN;
    this.widthHCN = widthHCN;

    //Thiết lập chiều dài và chiều rộng
    this.getLengthHCN = function () {
        return this.lengthHCN;
    }
    this.getWidthHCN = function () {
        return this.widthHCN;
    }

    this.setLengthHCN = function(lengthHCN) {
        this.lengthHCN  = lengthHCN;
    }
    this.setWidthHCN = function(widthHCN) {
        this.widthHCN  = widthHCN;
    }


    //Diện tích và chu vi
    this.getArea = function () {
        return this.lengthHCN * this.widthHCN;
    }
    this.getPerimeter = function () {
        return (this.lengthHCN + this.widthHCN)*2;
    }
};

function createRectangle(x,y) {
    var ctx = document.getElementById('myCanvas').getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20,10,x,y);
}


//Khởi tạo
let rectangle = new Rectangle(75,150);

//Hiển thị hình chữ nhật
createRectangle(rectangle.getWidthHCN(),rectangle.getLengthHCN());

//Thay đổi chiều dài và chiều rộng
rectangle.setLengthHCN(10);
rectangle.setWidthHCN(4);

//Diện tích và chu vi
let area = rectangle.getArea();
let perimeter = rectangle.getPerimeter();
document.getElementById('result').innerHTML = `Diện tích hình chữ nhật: ${area}. Chu vi hình chữ nhật: ${perimeter}`