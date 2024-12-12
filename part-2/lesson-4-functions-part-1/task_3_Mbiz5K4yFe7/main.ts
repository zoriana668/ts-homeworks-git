// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

// formula - S=2πr2 +2πrh


function calc(r: number, h: number):number {
    let pi: number = 3.14;
    let baseCylinderArea: number = 2 * pi * r * r;
    let lateralCylinderArea: number = 2 * pi * r * h;
    let cylinderArea: number = baseCylinderArea + lateralCylinderArea;
    return cylinderArea;
}

console.log('The area of cylinder is', calc(3, 7));