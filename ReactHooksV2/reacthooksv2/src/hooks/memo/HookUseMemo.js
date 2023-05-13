import React, { useState, useMemo } from 'react';
import { useContador } from '../../custom/useContador';
import { procesamientoPesado } from '../../helpers/procesamientoPesado';

export const HookUseMemo = () => {

    //Utilizamos el custom hook useCounter
    const { state, increment } = useContador(500);

    //Utilizamos un hook useState para controlar el valor de una variable booleana, inicializandola en true.
    const [booleano, setBooleano] = useState(true);

    const memoProcesamientoPesado = useMemo(() => procesamientoPesado(state), [state]);

    return (
        <>
            <h1>Hook useMemo</h1> 
            <hr />
            {/*
            Mandamos llamar la función de procesamiento pesado
            */}
            <p>{memoProcesamientoPesado}</p>
            <p>Contador: <small>{state}</small></p>
            <button
                className="btn btn-primary mt-5"
                onClick={() => increment(1)}
            >
                +1
            </button>
            {/*
            Este botón va utilizar y actualizar el estado de la variable 'booleano'
            */}
            <button
                className="btn btn-outline-primary mt-5"
                onClick={() => {
                    setBooleano(!booleano);
                }}
            >
                {/*
                Utilizamos JSON.stringify porque los valores booleanos no se muestran en el html
                */}
                Cambia Booleano: {JSON.stringify(booleano)}
            </button>
        </>
    )
}