function parseCount(value) {
    let parsing = Number.parseInt(value);
    if(isNaN(parsing)) {
        throw new Error ("Невалидное значение");
    }
    return parsing;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(error) {
        return error;
    }
}

class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a > b + c || b > a + c || c > a +b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    
    getPerimeter() {
      return this.a + this.b + this.c;
  }
    getArea() {
      let halfPerimetr = (this.a + this.b + this.c) / 2;
      let squar = Math.sqrt(halfPerimetr * (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c));
      return Number(squar.toFixed(3));
  }
}

function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);
    } catch(error) {
        const errorMessage = "Ошибка! Треугольник не существует";
        return {getPerimeter: () => errorMessage, getArea: () => errorMessage}
    }
}

