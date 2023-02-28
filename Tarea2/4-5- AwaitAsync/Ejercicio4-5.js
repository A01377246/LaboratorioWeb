const consumeDatos = async() => {
    try{
    
    const peticion = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    await peticion.json().then((datos) =>{
        console.log(datos);

        let {completed: c, id:i, title: t , userId: u} = datos;

        let templateLiteralDatos = 
       `Completed: ${c}
        Id: ${i}
        Title: ${t}
        UserId:${u}`

        console.log(templateLiteralDatos)

    });

    }catch(error){
    console.warn(error);
    //Manejar el error.
    }
   }

   consumeDatos();
