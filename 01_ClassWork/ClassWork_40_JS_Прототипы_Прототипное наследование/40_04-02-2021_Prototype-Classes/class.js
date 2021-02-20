class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }

    print(){
        console.log(`w: ${this.width}, h:${this.height}`);
    }
}

const square = new Rectangle(10,10);
console.log(square.calcArea());
const rect = new Rectangle(20,40);
console.log(rect.calcArea());
console.dir(square);

class ColorRectangleWithText extends Rectangle{
    constructor(height, width, text, bgColor){
        super(height,width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps(){
        console.log(`Text is ${this.text}, color: ${this.bgColor}`);
    }

    print(){
        super.print()
        console.log(`color: ${this.bgColor} `);
    }
}

const colorRect = new ColorRectangleWithText(100,20,'Hello world','red');
console.log(colorRect.calcArea());
colorRect.showMyProps();
console.dir(colorRect);

square.print();
colorRect.print();