class CalculadoraPromise{
    sumar(a,b,c){
        let promesa = new Promise((resolve) => {
            setTimeout(() => {
                console.log("Ejecución asincrona finalizada...");
                resolve();
            }, 1800); 
        });

        promesa.then(
            function(){
                if (c) {
                    console.log(`La suma de ${a} y ${b} es: ${a + b} y multiplicado por ${c} es : ${(a + b) * c}`)
                } else {
                    console.log(`La suma de ${a} y ${b} es: ${a + b}`)
                }
            }
        )
    }

    restar(a,b,c){
        let promesa = new Promise((resolve) => {
            setTimeout(() => {
                console.log("Ejecución asincrona finalizada...");
                resolve();
            }, 3000); 
        });

        promesa.then(
            function(){
                if (c) {
                    console.log(`La resta de ${a} y ${b} es: ${a - b} y multiplicado por ${c} es : ${(a - b) * c}`)
                } else {
                    console.log(`La resta de ${a} y ${b} es: ${a - b}`)
                }
            }
        )
    }

    multiplicar(a,b,c){
        let promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Ejecución asincrona finalizada...");
                resolve();
            }, 3900); 
        });

        promesa.then(
            function(){
                if (c) {
                    console.log(`La multiplicación de ${a} y ${b} es: ${a * b} y multiplicado por ${c} es : ${(a * b) * c}`)
                } else {
                    console.log(`La multiplicación de ${a} y ${b} es: ${a * b}`)
                }
            }
        )
    }

    dividir(a,b,c){
        let promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Ejecución asincrona finalizada...");
                if(b != 0){
                    resolve();
                }else{
                    reject();
                }
            }, 5000); 
        });

        promesa.then(
            function(){
                if (c) {
                    console.log(`La división de ${a} y ${b} es: ${a / b} y multiplicado por ${c} es : ${(a / b) * c}`)
                } else {
                    console.log(`La división de ${a} y ${b} es: ${a / b}`)
                }
            },
            function () {
                console.log("Ejecución asincrona finalizada con error");
            }
        ).catch((error) => {
            console.warn(error);
        }).finally(() => {
        })
    }
}

let calculadoraPromise = new CalculadoraPromise();

calculadoraPromise.sumar(1,2)
calculadoraPromise.sumar(1,2,3)
calculadoraPromise.restar(1,2)
calculadoraPromise.restar(1,2,3)
calculadoraPromise.multiplicar(10,100)
calculadoraPromise.multiplicar(10,100,10)
calculadoraPromise.dividir(100,4,10)
calculadoraPromise.dividir(100,0,10)