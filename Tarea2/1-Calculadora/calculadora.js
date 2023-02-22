

class Calculadora{

    sumar(a,b,c){
        if(c) return `La suma de ${a} y ${b} es: ${a + b} y multiplicado por ${c} es : ${(a+b)*c}`
        else return `La suma de ${a} y ${b} es: ${a + b}`
    }
    restar(a,b,c){
        if(c) return `La resta de ${a} y ${b} es: ${a - b} y multiplicado por ${c} es : ${(a-b)*c}`
        else return `La resta de ${a} y ${b} es: ${a - b}`

    }
    multiplicar(a,b,c){
        if(c) return `La multiplicación de ${a} y ${b} es: ${a * b} y multiplicado por ${c} es : ${(a*b)*c}`
        else return `La multiplicación de ${a} y ${b} es: ${a * b}`

    }
    dividir(a,b,c){
        if(c) return `La división de ${a} y ${b} es: ${a / b} y multiplicado por ${c} es : ${(a/b)*c}`
        else return `La división de ${a} y ${b} es: ${a / b}`

    }
}




let calculadora = new Calculadora()

console.log(calculadora.sumar(1,2))
console.log(calculadora.sumar(1,2,3))
console.log(calculadora.restar(1,2))
console.log(calculadora.restar(1,2,3))
console.log(calculadora.multiplicar(10,100))
console.log(calculadora.multiplicar(10,100,10))
console.log(calculadora.dividir(100, 10))
console.log(calculadora.sumar(100,10,10))
