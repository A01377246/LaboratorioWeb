import React from 'react';
import { useFetch } from '../custom/useFetch';
import { useContador } from '../custom/useContador';

export const MultipleCustomHooks = () => {

    const {state, increment} = useContador(1);
    console.log(state);

    //Utilizamos el custom hook 'useFetch'. Desestructuramos la información que devuelve el custom hook.
    const { loading, info } = useFetch(`https://api.rawg.io/api/games/${state}?key=8b6e06b9f28f45d98a693617c04469ed`);
    console.log({loading, info}); //{loading: loading, info: info}

    //Desestructuramos la información que vamos a utilizar, de info.
    const { name_original, description } = !!info && info;
    console.log(name_original);
    console.log(description);

    return (
        <>
            <h1>Información de Videojuegos</h1>
            <hr />
            {
                loading
                    ?
                    (
                        //Si loading es true, mostramos el mensaje 'loading'
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        //Si loading es false se muestra la información del juego.
                        <>
                            <div>
                                {name_original}
                            </div>
                            
                            <div dangerouslySetInnerHTML={{__html: description}}>
                            
                            </div>
                        </>
                    )
            }

            <button className='btn btn-primary'
                    onClick={() => increment()}>
                Siguiente Videojuego
            </button>
        </>
    );
}